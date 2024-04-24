import { AxiosRequestConfig } from "axios";
import { message } from 'ant-design-vue'


export const Message = {
  fail(content: unknown) {
    message.error(content as string);
  }
}