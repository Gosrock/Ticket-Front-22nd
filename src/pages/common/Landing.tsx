import { useNavigate } from 'react-router-dom';
import useAuthApi from '../../hooks/apis/useAuthApi';

const Landing = () => {
  const navigate = useNavigate();
  const { messageSend } = useAuthApi();
  return (
    <>
      <button onClick={() => navigate('/ticketing/select')}>티켓 예매</button>
      <button onClick={() => navigate('/mypage')}>예매 내역</button>
      <button
        onClick={() => {
          messageSend({ phoneNumber: '01055364937' });
        }}
      >
        send message api test
      </button>
    </>
  );
};

export default Landing;
