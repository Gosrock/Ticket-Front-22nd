import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { media } from '../../styles/theme';
import { useEffect } from 'react';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const setScreenSize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setScreenSize();
    window.addEventListener('resize', setScreenSize);
    return () => {
      // cleanup
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);
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
  //height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #121212;
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
  background-color: #363636;
  box-shadow: 40px 60px 80px rgba(9, 8, 26, 0.15),
    inset -2px -10px 20px rgba(13, 10, 37, 0.25), inset 10px 2px 20px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
`;
