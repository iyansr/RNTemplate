import axios, { AxiosRequestConfig } from 'axios';

function fetch(config: AxiosRequestConfig) {
  const instance = axios.create();

  const promise = instance({
    timeout: 3000,
    ...config,
    headers: config?.headers || {},
  });

  return promise;
}

export default fetch;
