import styled from 'styled-components';
import MarginContainer from './MarginContainer';

const Header = ({ isPC }: { isPC: boolean }) => {
  return (
    <Wrapper>
      <MarginContainer>
        {isPC && (
          <>
            <a>gosrock</a>
            <Nav>
              <a>DAY1</a>
              <a>DAY2</a>
              <a>유의사항</a>
            </Nav>
          </>
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
  background-color: white;
  z-index: 10;
  & > div {
    ${({ theme }) => theme.typo.text_16_R}
    color:${({ theme }) => theme.palette.mono.black_00};
    display: flex;
    justify-content: center; //space-between,
    align-items: center;

    & > a {
      position: absolute;
      left: 32px;
      cursor: pointer;
    }
  }
`;

const Nav = styled.div`
  & > a:not(:last-child) {
    margin-right: 48px;
  }
  cursor: pointer;
  a:active {
    color: ${({ theme }) => theme.palette.mono.black_26};
  }
`;
