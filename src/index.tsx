import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import './assets/fonts/fontStyle.css';
import App from './App';
import GlobalModal from './components/modal/GlobalModal';
import { GlobalStyle } from './styles/global-style';
import { theme } from './styles/theme';
import Toast from './components/common/Toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
          <GlobalModal />
          <Toast />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>,
);
