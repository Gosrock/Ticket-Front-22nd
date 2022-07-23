import { Routes, Route, Navigate } from 'react-router-dom';
import MyHomePage from './myHome/MyHomePage';
import MyTicketPage from './myTicket/MyTicketPage';
import MyTicketListPage from './myTicketList/MyTicketListPage';
import authPassHOC from '../../hooks/authPass';

const MyPagePagination = () => {
  const APHMyTicketListPage = () =>
    authPassHOC({
      PassComponent: MyTicketPage,
      ErrUrl: '/mypage/myhome',
      ErrMessage: '사용자 인증이 필요한 페이지 입니다.',
    });
  return (
    <Routes location={location}>
      <Route path="myhome" element={<MyHomePage />} />
      <Route path="myticketlist" element={<APHMyTicketListPage />} />
      <Route path=":ticketId" element={<MyTicketPage />} />
      {/* 이상한 url */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MyPagePagination;
