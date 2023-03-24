import axios, { AxiosRequestConfig } from 'axios';

function fetch(config: AxiosRequestConfig) {
  const controller = new AbortController();

  const instance = axios.create();

  const promise = instance({
    timeout: 3000,
    ...config,
    headers: config?.headers || {},
    signal: controller.signal,
  });

  return promise;
}

export default fetch;
