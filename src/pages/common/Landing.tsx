import { useNavigate } from 'react-router-dom';
import useAuthApi from '../../hooks/apis/useAuthApi';

const Landing = () => {
  const navigate = useNavigate();
  const { messageSend } = useAuthApi();
  return (
    <>
      <button
        style={{
          backgroundColor: '#fff',
          color: 'black',
          width: '60px',
          height: '60px',
          margin: '10px',
        }}
        onClick={() => navigate('/ticketing/select')}
      >
        티켓 예매
      </button>
      <button
        style={{
          backgroundColor: '#fff',
          color: 'black',
          width: '60px',
          height: '60px',
          margin: '10px',
        }}
        onClick={() => navigate('/mypage')}
      >
        예매 내역
      </button>
      <button
        onClick={() => {
          messageSend({ phoneNumber: '01020894275' });
        }}
      >
        send message api test
      </button>
    </>
  );
};

export default Landing;
