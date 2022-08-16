import useModal from '../../hooks/useModal';
import { axiosPrivate } from '../axios';
import { ICustomError } from './useApiError';
import { useNavigate } from 'react-router-dom';
const useHandle401 = () => {
  const navigate = useNavigate();

  // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청

  const handle401 = (error: ICustomError) => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('registerToken');
    // 새로운 토큰 저장
    axiosPrivate.defaults.headers.common.Authorization = '';
    navigate('/');
  };

  return { handle401 };
};

export default useHandle401;
