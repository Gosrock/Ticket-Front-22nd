import DepositStatus from '../../components/common/DepositStatus';
import PurchaseTicket from '../../components/mypage/PurchaseTicket';
import TicketInfo from '../../components/mypage/TicketInfo';
import Slider from '../../components/mypage/Slider';

const Mypage = () => {
  return (
    <>
      mypage
      <TicketInfo status={'paid'} date={'08월 30일 17:25'} ticketNum={17} />
      <DepositStatus status={'paid'} />
      <PurchaseTicket isFirst={false} onClick={() => null} />
      <Slider
        title={'응원 톡'}
        titleHighlight={'남기기'}
        content={'“긴 입력 예시야. 아좌좌좌!!  긴 입력 예...”\nfrom. 서도철'}
        team={null}
        onClick={() => {}}
      />
    </>
  );
};

export default Mypage;
