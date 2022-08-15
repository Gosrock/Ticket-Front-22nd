import { useCookies } from 'react-cookie';
import useModal from '../../hooks/useModal';
import { axiosPrivate } from '../axios';
import { ICustomError } from './useApiError';

const code401Handler = (error: ICustomError) => {
  const { openModal, closeModal } = useModal();
  const removeCookie = useCookies(['accessToken'])[2];
  removeCookie('accessToken');
  // 새로운 토큰 저장
  axiosPrivate.defaults.headers.common.Authorization = '';
  // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
  openModal({
    modalType: 'Notice',
    modalProps: {
      onClick: () => {
        closeModal();
      },
      closeModal,
      type: '에러처리',
      errorMessage: '로그인이 만료되었습니다',
    },
  });
};

export default code401Handler;
