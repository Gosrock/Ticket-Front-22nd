import DepositStatus from '../../components/common/DepositStatus';
import PurchaseTicket from '../../components/mypage/PurchaseTicket';
import TicketInfo from '../../components/mypage/TicketInfo';

const Mypage = () => {
  return (
    <>
      mypage
      <TicketInfo status={'paid'} date={'08월 30일 17:25'} ticketNum={17} />
      <DepositStatus status={'paid'} />
      <PurchaseTicket isFirst={false} onClick={() => null} />
    </>
  );
};

export default Mypage;
