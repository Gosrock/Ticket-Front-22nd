import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../../stores/auth';
import { redirectState } from '../../stores/redirect';
import { useCookies } from 'react-cookie';

const RequireAuth = () => {
  const { pathname } = useLocation();
  const setRedirectUri = useSetRecoilState(redirectState);

  const accessCookie = useCookies(['accessToken'])[0];
  const registerCookie = useCookies(['registerToken'])[0];
  // undefined or token

  useEffect(() => {
    setRedirectUri(pathname);
  }, []);

  if (accessCookie.accessToken) {
    // 어세스 토큰 있으면 패스
    return <Outlet />;
  } else if (registerCookie.registerToken) {
    // 어세스 토큰 없이 레지스터 토큰만 있으면 회원가입
    return <Navigate replace to="/auth/init" />;
  } else {
    // 둘 다 없으면 로그인..?
    return <Navigate replace to="/auth/login/1" />;
  }
};

export default RequireAuth;
