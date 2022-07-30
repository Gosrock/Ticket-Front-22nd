import styled from 'styled-components';
import { ReactComponent as Ticket } from '../../assets/icons/ticket.svg';
import BackGround from '../../assets/PurchaseTicketBackground.png';

interface IPurchaseTicketProps {
  isFirst: boolean;
  onClick: () => void;
}

const PurchaseTicket = ({ isFirst, onClick }: IPurchaseTicketProps) => {
  return (
    <Wrapper>
      <ToTicketing onClick={onClick}>
        {isFirst ? <p>예매하러 가기</p> : <p>또 예매할래요</p>}
        <Ticket style={{ width: '30px' }} />
      </ToTicketing>
    </Wrapper>
  );
};
export default PurchaseTicket;

const Wrapper = styled.div`
  border-radius: 16px;
  background: url(${BackGround});
  background-size: cover;
  width: 150px;
  height: 120px;
  padding: 84px 12px 6px 33px;
`;

const ToTicketing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  & p {
    ${({ theme }) => theme.typo.text_12_B};
    /* margin-top없으면 글씨가 위로 치우침 */
    /* 이거 진짜임 확인해보면 line-height 12px이긴한데 밑 부분이 약간 비어있음 */
    margin: 2px 8px 0px 0px;
    color: ${({ theme }) => theme.palette.mono.white};
  }
`;
