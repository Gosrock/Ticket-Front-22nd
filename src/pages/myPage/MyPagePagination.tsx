import { Routes, Route, Navigate } from 'react-router-dom';
import TicketsPage from './tickets/TicketsPage';
import TalkPage from './talk/TalkPage';

import authPassHOC from '../../hooks/authPass';

const MyPagePagination = () => {
  const APHTicketsPage = () =>
    authPassHOC({
      PassComponent: TicketsPage,
      ErrUrl: '/mypage',
      ErrMessage: '사용자 인증이 필요한 페이지 입니다.',
    });
  return (
    <Routes location={location}>
      <Route path="tickets" element={<APHTicketsPage />} />
      <Route path="talk" element={<TalkPage />} />
      {/* 이상한 url */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MyPagePagination;
