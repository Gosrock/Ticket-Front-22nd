import { Routes, Route, Navigate } from 'react-router-dom';
import authPassHOC from '../../hooks/authPass';
import CheckDetailPage from './checkDetail/CheckDetailPage';
import SelectDetailPage from './selectDetail/SelectDetailPage';

const ReservationPagination = () => {
  const APHSelectDetailPage = () =>
    authPassHOC({
      PassComponent: SelectDetailPage,
      ErrUrl: '/auth/message',
      ErrMessage: '사용자 인증이 필요한 페이지 입니다.',
    });
  const APHCheckDetailPage = () =>
    authPassHOC({
      PassComponent: CheckDetailPage,
      ErrUrl: '/auth/message',
      ErrMessage: '사용자 인증이 필요한 페이지 입니다.',
    });

  return (
    <Routes location={location}>
      <Route path="select" element={<APHSelectDetailPage />} />
      {/* 날짜, 매수를 선택한 데이터가 없으면 접근 못하게 수정해야함 */}
      <Route path="check" element={<APHCheckDetailPage />} />
      {/* 이상한 url */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ReservationPagination;
