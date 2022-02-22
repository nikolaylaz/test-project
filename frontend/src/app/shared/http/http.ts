import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { environment } from '../../../environments/environment';

let instance: AxiosInstance;

instance = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
} as AxiosRequestConfig);

export async function sendPost(path: string, data?: any) {
  const response = await instance.post(`${path}`, data);
  return response.data;
}

export async function sendGet(path: string, data?: any) {
  let config = {
    headers: {},
    params: data,
  } as AxiosRequestConfig;
  const response = await instance.get(`${path}`, config);
  return response.data;
}
