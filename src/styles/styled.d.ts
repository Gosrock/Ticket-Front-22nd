import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      point: {
        lavender: '#bf94e4';
        lavenderDark: '#372d3f';
        red: '#ff7785';
        mint: '#9fe8d6';
        yellow_kakao: '#ffeb00';
      };

      mono: {
        white: '#fff';
        white_e6: '#e6e6e6';
        white_fa: '#fafafa';
        black_00: '#000000';
        black_12: '#121212';
        black_26: '#262626';
        black_36: '#363636';
        black_footer: '#24272B';
        font_main: '#fafafa';
        font_sub: '#b6b7b8';
        font_placeholder: '#e5e5e5';
      };
    };
    typo: {
      title_28_B: string;
      title_24_B: string;
      text_18_B: string;
      text_18_M: string;
      text_18_M_lessSpacing: string;
      text_16_R: string;
      text_14_M: string;
      text_14_R: string;
      text_12_M: string;
      text_12_B: string;
      text_12_B_lessSpacing: string;
      placeholder_24_R: string;
      appbar_18_R: string;
      tag_10_B: string;
    };
    boxShadow: {
      normal: '0 3px 8px 0 rgb(0 0 0 / 10%)';
    };
  }
}
