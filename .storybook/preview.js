import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global-style';
import { theme } from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile1: {
        name: 'iPhone 13 mini',
        styles: {
          width: '375px',
          height: '812px',
        },
        type: 'mobile',
      },
      mobile2: {
        name: 'iPhone 13 / 13 pro',
        styles: {
          width: '390px',
          height: '844px',
        },
        type: 'mobile',
      },
    },
    defaultViewport: 'mobile1',
  },
  backgrounds: {
    values: [
      {
        name: 'black_12',
        value: '#121212',
      },
      {
        name: 'black_26',
        value: '#262626',
      },
      {
        name: 'black_36',
        value: '#363636',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
    default: 'black_12',
  },
  paddings: {
    values: [
      { name: 'none', value: '0px' },
      { name: 'default', value: '18px' },
    ],
    default: 'none',
  },
};
