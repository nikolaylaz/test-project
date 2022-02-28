import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';
import { environment } from '../../../environments/environment';
import { AUTH_TOKEN_KEY } from '../../constants';

let instance: AxiosInstance;

instance = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
} as AxiosRequestConfig);

export async function sendPost(path: string, data?: any) {
  const headers = attachAuthHeader();
  const response = await instance.post(`${path}`, data, { headers });
  return response.data;
}

export async function sendGet(path: string, data?: any) {
  const headers = attachAuthHeader();
  let config = {
    headers,
    params: data,
  } as AxiosRequestConfig;
  const response = await instance.get(`${path}`, config);
  return response.data;
}

function attachAuthHeader(): AxiosRequestHeaders {
  const key = sessionStorage.getItem(AUTH_TOKEN_KEY);
  if (key) {
    return {
      Authentication: key,
    };
  }
  return {};
}
