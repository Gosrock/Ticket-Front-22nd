import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <p>잘못된 접근이에요</p>
        <Button onClick={() => navigate('/')}>
          <p>메인페이지로</p>
        </Button>
      </div>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

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
