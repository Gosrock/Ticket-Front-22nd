import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotExistTickets = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <p>아직 예매하신 티켓이 없어요</p>
        <Button onClick={() => navigate('/ticketing/select')}>
          <p>예매하러 가기</p>
        </Button>
      </div>
    </Wrapper>
  );
};

export default NotExistTickets;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 160px);

  position: fixed;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > p {
      ${({ theme }) => theme.typo.text_18_M};
      color: ${({ theme }) => theme.palette.mono.white};
      margin-bottom: 29px;
      text-align: center;
    }
  }
`;

const Button = styled.div`
  background: ${({ theme }) => theme.palette.mono.white_fa};
  width: 164px;
  height: 48px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  cursor: pointer;

  & > p {
    ${({ theme }) => theme.typo.text_14_M}
    color: ${({ theme }) => theme.palette.mono.black_12};
  }
`;
