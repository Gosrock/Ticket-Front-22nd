import { Routes, Route, Navigate } from 'react-router-dom';
import requireAuth from '../../hooks/requireAuth';
import TakeDepositPage from './deposit/TakeDepositPage';
import CheckValidationNumPage from './message/CheckValidationNumPage';
import SendMessagePage from './message/SendMessagePage';

const ValidationPagination = () => {
  const RASendMessagePage = () =>
    requireAuth({
      Component: SendMessagePage,
      Policy: 'AUTH_SENDMESSAGE',
    });
  const RACheckValidationNumPage = () =>
    requireAuth({
      Component: CheckValidationNumPage,
      Policy: 'AUTH_VALIDATION',
    });
  const RATakeDepositPage = () =>
    requireAuth({
      Component: TakeDepositPage,
      Policy: 'AUTH_DEPOSIT',
    });

  return (
    <Routes location={location}>
      <Route path="message" element={<RASendMessagePage />} />
      {/* 인증 메세지 보낸거 아니면 못들어가게 수정 필요 */}
      <Route path="validation" element={<RACheckValidationNumPage />} />
      <Route path="deposit" element={<RATakeDepositPage />} />
      {/* 이상한 url */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ValidationPagination;
