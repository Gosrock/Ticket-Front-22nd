import { ICustomError } from './useApiError';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';

export type TErrorCode =
  | 'ValidationError'
  | 'Auth-0000'
  | 'Auth-0001'
  | 'Auth-9000'
  | 'Auth-5000'
  | 'Auth-1000'
  | 'Auth-1001'
  | 'Auth-1002'
  | 'Auth-1003';

const errorMessage = {
  ValidationError: '잘못된 값이 입력되었어요',
  'Auth-0000': '인증번호의 기한이 만료되었어요',
  'Auth-0001': '인증번호가 일치하지 않습니다',
  'Auth-9000': (
    <span>
      과도한 요청이에요
      <br />
      잠시 뒤에 다시 시도해주세요
    </span>
  ),
  'Auth-5000': (
    <div>
      문자 발송에 실패했어요
      <br />
      카카오 채널로 문의주세요
    </div>
  ),
  'Auth-1000': '로그인이 만료되었어요',
  'Auth-1001': '이미 가입된 번호입니다',
  'Auth-1002': '이미 가입된 번호입니다',
  'Auth-1003': '이미 가입된 번호입니다',
};

const useErrorModal = () => {
  const { openModal, closeModal } = useModal();
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
            localStorage.removeItem('registerToken');
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
