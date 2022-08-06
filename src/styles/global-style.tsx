import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

// export const GlobalStyle = createGlobalStyle`
export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box; /* 엘리먼트의 box-sizing 값을 border-box로 설정 */
      min-height: 100%;

      background-color: #121212;
      color: white;
    }
    #root {
      min-height: 100%;
    }
    html {
      height: 100%;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    * {
      box-sizing: inherit; /* 모든 엘리먼트의 box-sizing 값을 border-box로 설정 */
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    button {
      background: inherit; 
      border: none; 
      box-shadow: none; 
      border-radius: 0; 
      padding: 0; 
      overflow: visible; 
      cursor: pointer;
      color: white;
    }
    button:focus {
      outline: none;
    }


  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(211, 211, 211, 0.5);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;
