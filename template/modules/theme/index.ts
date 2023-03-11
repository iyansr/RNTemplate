import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',
  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',
  black: '#0B0B0B',
  white: '#F0F2F3',
};

const borderRadii = {
  full: 9999,
  l: 16,
  m: 12,
  none: 0,
  s: 8,
  xl: 20,
  xs: 6,
  xxl: 24,
  xxs: 4,
};

export const theme = createTheme({
  colors: palette,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii,
  textVariants: {
    defaults: {
      color: 'black',
      fontFamily: 'Plus Jakarta Sans',
    },
  },
});

export type Theme = typeof theme;
