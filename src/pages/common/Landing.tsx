import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Footer from '../../components/common/Footer';
import AuthApi from '../../apis/AuthApi';
import TicketApi from '../../apis/TicketApi';
import useGetTicket from '../../hooks/queries/useGetTicket';
import useGetTickets from '../../hooks/queries/useGetTickets';
import { authState } from '../../stores/auth';
import { ThemeProvider } from 'styled-components';

const Landing = () => {
  const navigate = useNavigate();
  // const tickets = useGetTickets();
  // console.log(tickets);
  // const ticket = useGetTicket({ uuid: '0' });
  // console.log(ticket);

  return (
    <>
      <BarStyle>
        <h1>Gosrock</h1>
      </BarStyle>
      <button onClick={() => navigate('/ticketing/select')}>티켓 예매</button>
      <button onClick={() => navigate('/mypage')}>예매 내역</button>
    </>
  );
};

export default Landing;
const StyledButton = styled.div`
  ${({ theme }) => theme.typo.title_28_B}
`;
const BarStyle = styled.div`
  position: fixed;
  display: flex;
  height: 80px;
  width: 100%;
  background-color: white;
  align-items: center;
  & > h1 {
    width: 100%;
    padding: 0px 18px;
    margin-bottom: 56px;
    color: ${({ theme }) => theme.palette.mono.black_00};
    ${({ theme }) => theme.typo.text_16_R};
  }
`;
