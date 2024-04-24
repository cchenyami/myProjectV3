import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { getToken } from "@/utils/auth"
import { tansParams } from "./handler";
import cache from "./cache";
import { Message } from "./tools";
/**
 * 请求成功拦截器
 *
 * @export
 * @param {AxiosRequestConfig} config
 * @return {*}  {AxiosRequestConfig}
 */
export function requestInterceptorsSuccess(config: AxiosRequestConfig): AxiosRequestConfig {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false;
  // 是否需要防止数据重复提交
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;

  if (getToken() && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken()
  }

  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + tansParams(config.params);
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }

  //重复提交处理
  if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime()
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', requestObj)
    } else {
      const s_url = sessionObj.url;                // 请求地址
      const s_data = sessionObj.data;              // 请求数据
      const s_time = sessionObj.time;              // 请求时间
      const interval = 1000;                       // 间隔时间(ms)，小于此时间视为重复提交
      if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
        const message = '数据正在处理，请勿重复提交';
        console.warn(`[${s_url}]: ` + message)
        return Promise.reject(new Error(message))
      } else {
        cache.session.setJSON('sessionObj', requestObj)
      }
    }
  }
  return config;
}

/**
 * 请求失败拦截器
 *
 * @export
 * @param {AxiosRequestConfig} config
 * @return {*}  {Promise<AxiosRequestConfig>}
 */
export function requestInterceptorsFail<T extends AxiosError<Api.ResponseOptions>>(error: T): Promise<T> {
  console.error("请求失败", error);
  return Promise.reject(error);
}
export enum HTTP_CODE {
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVICE_ERROR = 500,
}

/**
 * 响应拦截器
 
 *
 * @export
 * @template T
 * @param {T} data
 * @return {*}  {(T | Promise<T>)}
 */
export function businessResponse<T extends AxiosResponse<A>, A extends Api.ResponseOptions>(response: T) {
  const {
    data,
    config
  } = response;
  return response.status === HTTP_CODE.SUCCESS ? Promise.resolve(data) : Promise.reject(response);
}


/**
 * 响应异常
 *
 * @export
 * @param {AxiosResponse<Api.ResponseOptions>} response
 * @return {*}
 */
export function responseInterceptorsFail(error: AxiosError<Api.ResponseOptions>): Promise<AxiosResponse<Api.ResponseOptions>> {
  console.error("响应失败", error);
  const { response, message } = error;
  // 网络异常
  if (message === "Network Error") {
    // @ts-ignore
    releaseHash({
      config: error.config
    });
    Message.fail("网络异常");
    return Promise.reject(error);
  }
  // 请求重复
  if (message === '请求重复') {

    return Promise.reject(error);
  }


  return Promise.reject(response);
}