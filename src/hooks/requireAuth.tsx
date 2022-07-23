import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../stores/auth';
import { studentInfo } from '../stores/studentInfo';

interface IrequireAuth {
  Component: () => JSX.Element;
  Policy: string;
}

const requireAuth = ({ Component, Policy }: IrequireAuth) => {
  const { authenticated } = useRecoilValue(authState);
  const { cellphone } = useRecoilValue(studentInfo);

  console.log(!cellphone);
  if (Policy === 'RESERVATION_SENDMESSAGE') {
    if (authenticated) {
      alert('이미 인증되어있습니다.');
      return <Navigate to={'/reservation/select'} />;
    }
    if (!authenticated && !!cellphone) return <Navigate to={'/auth/deposit'} />;
    return <Component />;
  }

  if (Policy === 'RESERVATION_VALIDATION') {
    // if (authenticated) {
    //   alert('이미 인증되어있습니다.');
    //   return <Navigate to={'/reservation/select'} />;
    // }
    // if (!authenticated) {
    //   alert('잘못된 접근입니다.');
    //   return <Navigate to={'/reservation/message'} />;
    // }

    // 나중에 완성해야함

    return <Component />;
  }

  if (Policy === 'RESERVATION_DEPOSIT') {
    if (authenticated) {
      alert('이미 인증되어있습니다.');
      return <Navigate to={'/reservation/select'} />;
    }
    if (!authenticated && !cellphone) {
      alert('전화번호 인증이 필요한 페이지 입니다.');
      return <Navigate to={'/reservation/message'} />;
    }
    return <Component />;
  }

  alert('ERROR');
  return <Navigate to={'/'} />;
};

export default requireAuth;
