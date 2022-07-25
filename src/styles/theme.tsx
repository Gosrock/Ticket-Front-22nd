import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    point: {
      lavender: '#bf94e4',
      lavenderDark: '#372d3f',
      red: '#ff7785',
      mint: '#9fe8d6',
    },

    mono: {
      white: '#fff',
      white_e6: '#e6e6e6',
      black_00: '#000000',
      black_12: '#121212',
      black_26: '#262626',
      black_36: '#363636',
      font_main: '#fafafa',
      font_sub: '#b6b7b8',
      font_placeholder: '#939393',
    },
  },
  boxShadow: {
    normal: '0 3px 8px 0 rgb(0 0 0 / 10%)',
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const calcRem = (px: number) => `${px / 16}rem`;
