import { ICustomError } from './useApiError';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export type TErrorCode =
  | 'ValidationError'
  | 'Auth-0000'
  | 'Auth-0001'
  | 'Auth-9000'
  | 'Auth-5000'
  | 'Auth-1002';

const errorMessage = {
  ValidationError: '잘못된 값이 입력되었어요',
  'Auth-0000': '인증번호의 기한이 만료되었어요',
  'Auth-0001': '인증번호가 일치하지 않습니다',
  'Auth-9000': '잠시 뒤에 다시 시도해주세요',
  'Auth-5000': '문자 발송에 실패했어요\n카카오 채널로 문의주세요',
  'Auth-1002': '이미 가입된 번호입니다',
};

const useErrorModal = () => {
  const { openModal, closeModal } = useModal();
  const [, , removeCookie] = useCookies(['registerToken']);
  const navigate = useNavigate();
  const openErrorModal = (error: ICustomError) => {
    const code = error.code as TErrorCode;
    openModal({
      modalType: 'Notice',
      modalProps: {
        onClick: () => {
          closeModal();
          if (code === 'Auth-1002') {
            navigate('/');
            removeCookie('registerToken');
          }
        },
        type: '에러처리',
        errorMessage: errorMessage[code],
      },
    });
  };

  return { openErrorModal } as const;
};

export default useErrorModal;
