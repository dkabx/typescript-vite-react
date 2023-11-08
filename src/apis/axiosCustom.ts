import { CLIENT_ID } from '@/constants/common';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { get } from 'lodash';

const config = {
  env: {
    API_BASE_URL: import.meta.env.VITE_API_ENDPOINT,
  },
};

// for api that don't use any authentication
export const authApi = axios.create({
  baseURL: config.env.API_BASE_URL,
  timeout: 60 * 1000,
});

export const secureApi = axios.create({
  baseURL: config.env.API_BASE_URL,
  timeout: 60 * 1000,
});

const handleResponse = (response: AxiosResponse) => {
  if (response.data.error === undefined) {
    return get(response, 'data');
  } else {
    throw response;
  }
};

const handleResponseError = (error: AxiosError) => {
  console.log('API - Response Error', error);

  throw error;
};

const handleRequestError = (error: AxiosError) => {
  console.log('API - Request Error', error);
  throw error;
};

const logRequest = (request: AxiosRequestConfig) => {
  const { method, baseURL, url, headers, params } = request;
  console.log('API', 'Request', method, baseURL, url, headers, params);
  console.log('REQUEST', request);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleAuthRequest: any = async (config: AxiosRequestConfig) => {
  const { headers = {} } = config;
  const data = get(config, 'data') || {}; //eslint-disable-line
  // append any common data to request, ex data.clientId = CLIENT_ID;
  headers['Content-Type'] = 'application/json;charset=UTF-8';
  headers['Access-Control-Allow-Origin'] = '*';
  logRequest(config);
  return config;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSecureRequest: any = async (config: AxiosRequestConfig) => {
  const { headers = {} } = config;
  const data = get(config, 'data') || {};
  data.clientId = CLIENT_ID;
  const token = 'YOUR_AUTH_TOKEN';
  headers.Authorization = `Bearer ${token}`;
  logRequest(config);
  return config;
};

authApi.interceptors.request.use(handleAuthRequest, handleRequestError);
authApi.interceptors.response.use(handleResponse, handleResponseError);

secureApi.interceptors.request.use(handleSecureRequest, handleRequestError);
secureApi.interceptors.response.use(handleResponse, handleResponseError);
