import { Navigate, Route, Routes } from 'react-router-dom';
import Mypage from './Mypage';
import OrderList from './OrderList';
import Talk from './Talk';

const MypageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Mypage />} />
      <Route path="/talk" element={<Talk />} />
      <Route path="/tickets" element={<OrderList />} />

      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default MypageRouter;
