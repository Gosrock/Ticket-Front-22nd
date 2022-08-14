import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useScroll from '../../hooks/useScroll';
import MarginContainer from './MarginContainer';

const Header = ({ isPC }: { isPC: boolean }) => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  return (
    <Wrapper scrollY={scrollY} isPC={isPC}>
      <MarginContainer>
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
        {isPC ? (
          <Nav>
            <a href="#yb">DAY1</a>
            <a href="#ob">DAY2</a>
            <a href="#info">유의사항</a>
          </Nav>
        ) : (
          <button
            onClick={() => {
              navigate('/ticketing/select');
            }}
          >
            예매하러 가기
          </button>
        )}
      </MarginContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div<{ scrollY: number; isPC: boolean }>`
  position: fixed;
  height: ${({ isPC }) => (isPC ? '80px;' : '60px')};
  width: 100%;
  background-color: ${({ scrollY }) =>
    scrollY > 30 ? `rgba(255, 255, 255, 0.9)` : `rgba(255, 255, 255, 0.0)`};
  backdrop-filter: saturate(100%) blur(20px);
  filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.1));

  z-index: 10;
  & > div {
    ${({ theme }) => theme.typo.text_16_R}
    font-weight: 500;
    color: ${({ theme, scrollY }) =>
      scrollY > 30
        ? theme.palette.mono.black_00
        : theme.palette.mono.font_main};
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
      background-color: ${({ theme, scrollY }) =>
        scrollY > 30
          ? theme.palette.mono.black_12
          : theme.palette.mono.font_main};
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme, scrollY }) =>
        scrollY > 30 ? theme.palette.mono.white : theme.palette.mono.black_12};
      ${({ theme, isPC }) =>
        isPC ? theme.typo.text_14_M : theme.typo.text_12_M}
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
