import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavigateSection = ({ isPC }: { isPC: boolean }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button
        onClick={() => {
          navigate('/mypage');
        }}
      >
        마이페이지
      </button>
      <button
        onClick={() => {
          navigate('/ticketing/select');
        }}
      >
        예매하러 가기
      </button>
    </Wrapper>
  );
};

export default NavigateSection;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  button {
    width: 140px;
    padding: 16px 0;
    background-color: ${({ theme }) => theme.palette.mono.black_12};
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.palette.mono.white};
    ${({ theme }) => theme.typo.text_16_R}
    font-weight: 500;
    &:active {
      background-color: ${({ theme }) => theme.palette.mono.black_26};
    }
  }
  & > button:first-child {
    margin-right: 12px;
    background-color: ${({ theme }) => theme.palette.mono.black_36};
  }
`;
