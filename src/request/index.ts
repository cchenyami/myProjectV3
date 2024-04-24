import axios from "axios";
import { requestInterceptorsSuccess,requestInterceptorsFail,businessResponse,responseInterceptorsFail } from "./interceptors";

export const baseURL = window._config.api
const service = axios.create({
  baseURL,
  timeout: 1000,
});

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

//请求拦截器
//@ts-ignore
service.interceptors.request.use(requestInterceptorsSuccess,requestInterceptorsFail)



//响应拦截器
// @ts-ignore
service.interceptors.response.use(businessResponse, responseInterceptorsFail);


export default service;