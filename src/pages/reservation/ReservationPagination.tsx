import { Routes, Route, Navigate } from 'react-router-dom';
import CheckDetailPage from './check/CheckDetailPage';
import SelectDetailPage from './select/SelectDetailPage';
import TakeDepositPage from './deposit/TakeDepositPage';
import CheckValidationNumPage from './validation/CheckValidationNumPage';
import SendMessagePage from './message/SendMessagePage';
import requireAuth from '../../hooks/requireAuth';
import authPassHOC from '../../hooks/authPass';

const ReservationPagination = () => {
  const RASendMessagePage = () =>
    requireAuth({
      Component: SendMessagePage,
      Policy: 'RESERVATION_SENDMESSAGE',
    });
  const RACheckValidationNumPage = () =>
    requireAuth({
      Component: CheckValidationNumPage,
      Policy: 'RESERVATION_VALIDATION',
    });
  const RATakeDepositPage = () =>
    requireAuth({
      Component: TakeDepositPage,
      Policy: 'RESERVATION_DEPOSIT',
    });
  const APHSelectDetailPage = () =>
    authPassHOC({
      PassComponent: SelectDetailPage,
      ErrUrl: '/reservation/message',
      ErrMessage: '사용자 인증이 필요한 페이지 입니다.',
    });
  const APHCheckDetailPage = () =>
    authPassHOC({
      PassComponent: CheckDetailPage,
      ErrUrl: '/reservation/message',
      ErrMessage: '사용자 인증이 필요한 페이지 입니다.',
    });

  return (
    <Routes location={location}>
      <Route path="message" element={<RASendMessagePage />} />
      {/* 인증 메세지 보낸거 아니면 못들어가게 수정 필요 */}
      <Route path="validation" element={<RACheckValidationNumPage />} />
      <Route path="deposit" element={<RATakeDepositPage />} />
      <Route path="select" element={<APHSelectDetailPage />} />
      {/* 날짜, 매수를 선택한 데이터가 없으면 접근 못하게 수정해야함 */}
      <Route path="check" element={<APHCheckDetailPage />} />
      {/* 이상한 url */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ReservationPagination;
