import styled from 'styled-components';
import { ReactComponent as Ticket } from '../../../assets/icons/ticket.svg';
import BackGround from '../../../assets/PurchaseTicketBackground.png';

interface IPurchaseTicketProps {
  isFirst: boolean;
  onClick: () => void;
}

const PurchaseTicket = ({ isFirst, onClick }: IPurchaseTicketProps) => {
  return (
    <Container>
      <Wrapper onClick={onClick}>
        <ToTicketing>
          {isFirst ? <p>예매하러 가기</p> : <p>또 예매할래요</p>}
          <Ticket style={{ width: '30px' }} />
        </ToTicketing>
      </Wrapper>
    </Container>
  );
};
export default PurchaseTicket;

const Container = styled.div`
  width: 168px;
  margin: 0 0 0 16px;

  display: flex;
  justify-content: start;
`;

const Wrapper = styled.div`
  border-radius: 16px;
  background: url(${BackGround});
  background-size: cover;
  width: 150px;
  height: 120px;
  padding: 84px 12px 6px 12px;

  cursor: pointer;
`;

const ToTicketing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  & p {
    ${({ theme }) => theme.typo.text_12_B};
    margin: 0px 8px 0px 0px;
    color: ${({ theme }) => theme.palette.mono.white};
  }
`;
