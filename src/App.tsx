import { Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Landing from './pages/common/Landing';
import NotFound from './pages/common/NotFound';
import AuthRouter from './pages/auth';
import MypageRouter from './pages/mypage';
import TicketingRouter from './pages/ticketing';
import Layout from './components/common/Layout';
import TicketQR from './pages/common/TicketQR';
import RequireAuth from './components/auth/RequireAuth';
import useApiError from './apis/error/useApiError';
function App() {
  const { handleError } = useApiError();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { onError: (error: any) => handleError(error) },
      mutations: {
        onError: (error: any) => {
          handleError(error);
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route element={<RequireAuth />}>
            <Route path="/mypage/*" element={<MypageRouter />} />
            <Route path="/ticketing/*" element={<TicketingRouter />} />
          </Route>
          <Route path="/tickets/:ticketId" element={<TicketQR />} />
          <Route path="/404" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
