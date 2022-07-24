import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { media } from '../../styles/theme';

function Layout() {
  const { pathname } = useLocation();

  const isPC = useMediaQuery({ minWidth: 768 });

  return (
    <Wrapper>
      <Container>
        {isPC ? (
          <Mockup>
            <iframe
              src={pathname}
              style={{ width: '360px', height: '715px', borderRadius: '28px' }}
            ></iframe>
          </Mockup>
        ) : (
          <Outlet />
        )}
      </Container>
    </Wrapper>
  );
}

export default Layout;
const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.mono.black_12};
  /* 모바일 화면 */
  ${media.tablet} {
    width: 100%;
    min-width: 320px;
    height: calc(var(--vh, 1vh) * 100);
    border: none;
    border-radius: 0px;
  }

  /* pc 모바일 목업 화면 */
  width: 390px;
  height: 744px;
  box-sizing: content-box;
  border-radius: 36px;

  /* 탭바 */
  position: relative;
`;

const Mockup = styled.div`
  width: 390px;
  height: 744px;
  box-shadow: inset -2px -10px 20px rgba(13, 10, 37, 0.25),
    inset 10px 2px 20px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
`;
