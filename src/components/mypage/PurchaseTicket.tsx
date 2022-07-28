import styled from 'styled-components';
import { ReactComponent as Ticket } from '../../assets/icons/ticket.svg';
import TicketInfo from './TicketInfo';

interface IPurchaseTicketProps {
  isFirst: boolean;
  onClick: () => void;
}

const PurchaseTicket = ({ isFirst, onClick }: IPurchaseTicketProps) => {
  return (
    <TicketInfo status="입금확인" createat={'08월 30일 17:25'} ticketNum={17}>
      <Wrapper>
        <ToTicketing onClick={onClick}>
          {isFirst ? <p>예매하러 가기</p> : <p>또 예매할래요</p>}
          <Ticket style={{ width: '30px' }} />
        </ToTicketing>
      </Wrapper>
    </TicketInfo>
  );
};
export default PurchaseTicket;

const Wrapper = styled.div`
  position: relative;
  top: -121px;
  left: 0px;
  border-radius: 16px;
  /* background-color: blue; */
  background: rgba(0, 0, 0, 0.49);
  backdrop-filter: blur(10px);
  width: 150px;
  height: 120px;
  padding: 84px 12px 6px 33px;
`;

const ToTicketing = styled.div`
  width: 105px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & p {
    width: 67px;
    height: 12px;
    text-align: center;

    ${({ theme }) => theme.typo.text_12_B};

    /* margin-top없으면 글씨가 위로 치우침 */
    margin: 2px 8px 0px 0px;
    line-height: 12px;
    letter-spacing: -0.408px;

    color: ${({ theme }) => theme.palette.mono.white};
  }
`;
