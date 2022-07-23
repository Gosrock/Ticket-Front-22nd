import { Routes, Route, Navigate } from 'react-router-dom';
import ReservationPagination from './reservation/ReservationPagination';
import MyPagePagination from './mypage/MyPagePagination';
import TicketQRPage from './tickets/TicketQRPage';
import MyPage from './mypage/MyPage';
const Pagination = () => {
  return (
    <Routes location={location}>
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/*" element={<MyPagePagination />} />
      <Route path="/reservation/*" element={<ReservationPagination />} />
      <Route path="/tickets/:uuid" element={<TicketQRPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Pagination;
