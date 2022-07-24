import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/ticketing/select')}>티켓 예매</button>
      <button onClick={() => navigate('/mypage')}>예매 내역</button>
    </>
  );
};

export default Landing;
