import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
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
          AuthApi.messageSend({ phoneNumber: '01020894275' });
        }}
      >
        인증번호 요청
      </button>
      <button
        onClick={() => {
          AuthApi.messageValidate({
            phoneNumber: '01020894275',
            validationNumber: '3173',
          });
        }}
      >
        회원가입
      </button>
      <StyledButton
        onClick={() => {
          AuthApi.register(
            {
              name: '정상훈',
            },
            registerToken,
          );
        }}
      >
        회원가입
      </StyledButton>
    </>
  );
};

export default Landing;
const StyledButton = styled.div`
  ${({ theme }) => theme.typo.title_28_B}
`;
