import { useTheme as useRestyleTheme } from '@shopify/restyle';
import { Theme } from '.';

const useTheme = () => {
  return useRestyleTheme<Theme>();
};

export default useTheme;
