import useFetch from '@modules/lib/axios/useFetch';
import { useMutation } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

type Params = {
  username: string;
  password: string;
};

function _post({ username, password }: Params): AxiosRequestConfig {
  return {
    method: 'POST',
    url: '/your-post-url',
    data: {
      username,
      password,
    },
  };
}
const useMutatePost = () => {
  const post = useFetch(_post);

  return useMutation({
    mutationFn: post,
  });
};

export default useMutatePost;
