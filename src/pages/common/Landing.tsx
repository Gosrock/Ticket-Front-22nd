import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import AuthApi from '../../apis/AuthApi';
import TicketApi from '../../apis/TicketApi';
import useGetTicket from '../../hooks/apis/useGetTicket';
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
            validationNumber: '0943',
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
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IjAxMDIwODk0Mjc1IiwiaWF0IjoxNjU4OTA5MDU3LCJleHAiOjE2NTg5MDk2NTd9.lmcOP3eKUfzPwxw0XiYJlHFWIKz_SCag7nNAOWh_o7c',
          );
        }}
      >
        회원가입
      </StyledButton>
      <StyledButton
        onClick={() => {
          console.log(TicketApi.getTickets());
        }}
      >
        티켓전체
      </StyledButton>
      <StyledButton
        onClick={() => {
          console.log(TicketApi.getTicket({ uuid: '0' }));
        }}
      >
        티켓하나
      </StyledButton>
    </>
  );
};

export default Landing;
const StyledButton = styled.div`
  ${({ theme }) => theme.typo.title_28_B}
`;
