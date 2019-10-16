/**
 * Created by Carrie.
 */
import Env from './env';
import axios from 'axios';

axios.defaults.withCredentials = true;
//基地址
// let base = Env.baseURL;

const instance = axios.create({
  baseURL: Env.baseURL,
  timeout: 1000 * 60 * 60,
});

//通用方法
export const POST = (url: any, params?: any) => {
  return instance.post(url, params).then(res => res.data);
};
export const GET = (url: any, params?: any) => {
  if (!params) {
    return instance.get(url).then(res => res.data);
  }
  return instance.get(`${url}?${params}`).then(res => res.data);
};

export const PUT = (url: any, params?: any) => {
  return instance.put(url, params).then(res => res.data);
};

export const DELETE = (url: any, params?: any) => {
  return instance.delete(url, { data: params }).then(res => res.data);
};

// export const PATCH = (url, params) => {
//   return instance.patch(url, params).then(res => res.data)
// }

// export const GETCONFIG = (url, params) => {
//   return instance.get(`${url}`,{data: params}).then(res => res.data)
// }
