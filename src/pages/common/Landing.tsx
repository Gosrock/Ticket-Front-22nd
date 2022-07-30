import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import AuthApi from '../../apis/AuthApi';
import TicketApi from '../../apis/TicketApi';
import useGetTicket from '../../hooks/queries/useGetTicket';
import useGetTickets from '../../hooks/queries/useGetTickets';
import { authState } from '../../stores/auth';

const Landing = () => {
  const navigate = useNavigate();
  // const tickets = useGetTickets();
  // console.log(tickets);
  // const ticket = useGetTicket({ uuid: '0' });
  // console.log(ticket);

  return (
    <>
      <button onClick={() => navigate('/ticketing/select')}>티켓 예매</button>
      <button onClick={() => navigate('/mypage')}>예매 내역</button>
    </>
  );
};

export default Landing;
const StyledButton = styled.div`
  ${({ theme }) => theme.typo.title_28_B}
`;
