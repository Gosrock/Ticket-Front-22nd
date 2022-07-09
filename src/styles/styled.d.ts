import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      lavender: '#bf94e4';
      pink: '#ff7785';
      mono: ['#fff', '#b6b7b8', '#939393', '#363636', '#262626', '#121212'];
    };
    boxShadow: {
      normal: '0 3px 8px 0 rgb(0 0 0 / 10%)';
    };
  }
}
