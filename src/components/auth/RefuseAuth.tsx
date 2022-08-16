import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../../stores/auth';
import { redirectState } from '../../stores/redirect';
import useModal from '../../hooks/useModal';

const RefuseAuth = () => {
  const { openModal, closeModal } = useModal();
  const accessToken = localStorage.getItem('accessToken');
  const registerToken = localStorage.getItem('registerToken');
  // undefined or token
  const location = useLocation();
  console.log(location);
  if (accessToken) {
    // 어세스 토큰 있으면 마이페이지로 되돌려버림
    openModal({
      modalType: 'Notice',
      modalProps: {
        onClick: () => {
          closeModal();
        },
        type: '에러처리',
        errorMessage: '잘못된 접근입니다',
      },
    });
    return <Navigate replace to="/mypage" />;
  } else {
    // 둘 다 없으면 로그인 페이지로
    return <Outlet />;
  }
};

export default RefuseAuth;
