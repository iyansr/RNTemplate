import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';

import fetch from './fetch';
import { useCallback } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useJwtStore } from '@modules/shared/hooks/store/useJWTStore';

export default function useFetch<R>(fetchFn: (...args: any[]) => AxiosRequestConfig) {
  const { setJWT, jwt } = useJwtStore(state => {
    return { setJWT: state.setJwt, jwt: state.jwt };
  });

  const handleFetch = useCallback(
    async function callFetch(...args: any[]) {
      const _fetchConfig = fetchFn(...args);

      const defaultHeader = {
        ...(!isEmpty(jwt)
          ? {
              authorization: `Bearer ${jwt}`,
            }
          : {}),
      };

      const promise: Promise<AxiosResponse<R>> = fetch({
        ..._fetchConfig,
        baseURL: 'URL',
        headers: merge(defaultHeader, _fetchConfig.headers),
      });

      return promise
        .then(result => {
          return result.data;
        })
        .catch(error => {
          throw error;
        });
    },
    [setJWT, jwt],
  );

  return handleFetch;
}
