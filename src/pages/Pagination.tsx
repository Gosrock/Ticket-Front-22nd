import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPagination from './auth/AuthPagination';
import ReservationPagination from './reservation/ReservationPagination';
import MyPagePagination from './myPage/MyPagePagination';
import ChattingPage from './chatting/ChattingPage';

const Pagination = () => {
  return (
    <Routes location={location}>
      <Route path="/mypage/*" element={<MyPagePagination />} />
      <Route path="/reservation/*" element={<ReservationPagination />} />
      <Route path="/auth/*" element={<AuthPagination />} />
      <Route path="/chatting" element={<ChattingPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Pagination;
