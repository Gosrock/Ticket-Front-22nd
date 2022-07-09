import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    lavender: '#bf94e4',
    pink: '#ff7785',
    mono: ['#fff', '#b6b7b8', '#939393', '#363636', '#262626', '#121212'],
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
