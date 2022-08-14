import styled from 'styled-components';
import MarginContainer from './MarginContainer';

const Header = ({ isPC }: { isPC: boolean }) => {
  return (
    <Wrapper>
      <MarginContainer>
        {isPC ? (
          <>
            <a
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              onMouseOver={(e) => {
                e.currentTarget.innerHTML = 'toward the top';
              }}
              onMouseOut={(e) => {
                e.currentTarget.innerHTML = 'gosrock.';
              }}
            >
              gosrock.
            </a>
            <Nav>
              <a href="#yb">DAY1</a>
              <a href="#ob">DAY2</a>
              <a href="#info">유의사항</a>
            </Nav>
          </>
        ) : (
          <button>예매하러 가기</button>
        )}
      </MarginContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: saturate(100%) blur(20px);
  filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.1));

  z-index: 10;
  & > div {
    ${({ theme }) => theme.typo.text_16_R}
    font-weight: 500;
    color: ${({ theme }) => theme.palette.mono.black_00};
    display: flex;
    justify-content: center; //space-between,
    align-items: center;

    & > a {
      position: absolute;
      left: 32px;
      cursor: pointer;
      &:hover {
        transform: translateY(-3px);
        transition: all 0.3s ease;
      }
    }

    button {
      margin-left: auto;
      padding: 12px 12px;
      background-color: ${({ theme }) => theme.palette.mono.black_12};
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.palette.mono.white};
      ${({ theme }) => theme.typo.text_14_M}
      &:active {
        background-color: ${({ theme }) => theme.palette.mono.black_26};
      }
    }
  }
`;

const Nav = styled.div`
  & > a:not(:last-child) {
    margin-right: 64px;
  }
  cursor: pointer;
  a:active {
    color: ${({ theme }) => theme.palette.mono.black_26};
  }
`;
