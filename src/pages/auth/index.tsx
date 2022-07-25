import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Init from './Init';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login/:step" element={<Login />} />
      <Route path="/init" element={<Init />} />

      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AuthRouter;
