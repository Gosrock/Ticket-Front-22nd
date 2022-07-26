import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import AuthApi from '../../apis/AuthApi';
import { authState } from '../../stores/auth';

const Landing = () => {
  const navigate = useNavigate();
  const { registerToken } = useRecoilValue(authState);

  return (
    <>
      <button onClick={() => navigate('/ticketing/select')}>티켓 예매</button>
      <button onClick={() => navigate('/mypage')}>예매 내역</button>
      <button
        onClick={() => {
          AuthApi.messageSend({ phoneNumber: '01055364937' });
        }}
      >
        인증번호 요청
      </button>
      <button
        onClick={() => {
          AuthApi.messageValidate({
            phoneNumber: '01055364937',
            validationNumber: '3173',
          });
        }}
      >
        인증번호 확인
      </button>
      <button
        onClick={() => {
          AuthApi.register(
            {
              name: '한규진',
            },
            registerToken,
          );
        }}
      >
        회원가입
      </button>
    </>
  );
};

export default Landing;
