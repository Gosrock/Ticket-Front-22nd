import { useCookies } from 'react-cookie';
import useModal from '../../hooks/useModal';
import { axiosPrivate } from '../axios';
import { ICustomError } from './useApiError';
import { useNavigate } from 'react-router-dom';
const useHandle401 = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const removeCookie = useCookies(['accessToken'])[2];
  removeCookie('accessToken');
  // 새로운 토큰 저장
  axiosPrivate.defaults.headers.common.Authorization = '';
  // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청

  const handle401 = (error: ICustomError) => {};

  return { handle401 };
};

export default useHandle401;
