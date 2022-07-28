import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import AuthApi from '../../apis/AuthApi';
import { authState } from '../../stores/auth';

const Landing = () => {
  const navigate = useNavigate();
  const { registerToken } = useRecoilValue(authState);

  return (
    <>
      <button onClick={() => navigate('/ticketing/select')}>
        티켓 예매하기
      </button>
      <button onClick={() => navigate('/mypage')}>예매 내역 보기</button>
    </>
  );
};

export default Landing;
const StyledButton = styled.div`
  ${({ theme }) => theme.typo.title_28_B}
`;
