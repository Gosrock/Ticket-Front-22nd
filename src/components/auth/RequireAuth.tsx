import { userInfo } from 'os';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../../stores/auth';

const RequireAuth = () => {
  const { isAuthenticated, userName } = useRecoilValue(authState);
  // 인증이 되어 있지 않으면 문자인증 페이지로, 입금자명이 설정되어 있지 않으면 입금자명 입력페이지로 리다이렉트
  if (!isAuthenticated) {
    return <Navigate replace to="/auth/login/1" />;
  } else if (!userName) {
    return <Navigate replace to="/auth/init" />;
  } else return <Outlet />;
};

export default RequireAuth;
