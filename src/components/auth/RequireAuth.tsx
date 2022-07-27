import { userInfo } from 'os';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../../stores/auth';
import { redirectState } from '../../stores/redirect';

const RequireAuth = () => {
  const { pathname } = useLocation();
  const { accessToken, registerToken, userName } = useRecoilValue(authState);
  const setRedirectUri = useSetRecoilState(redirectState);
  // 인증이 되어 있지 않으면 문자인증 페이지로, 입금자명이 설정되어 있지 않으면 입금자명 입력페이지로 리다이렉트
  useEffect(() => {
    setRedirectUri(pathname);
  }, []);

  if (accessToken) {
    // 어세스 토큰 있으면 패스
    return <Outlet />;
  } else if (registerToken) {
    // 어세스 토큰 없이 레지스터 토큰만 있으면 회원가입
    return <Navigate replace to="/auth/init" />;
  } else {
    // 둘 다 없으면 로그인..?
    return <Navigate replace to="/auth/login/1" />;
  }
};

export default RequireAuth;
