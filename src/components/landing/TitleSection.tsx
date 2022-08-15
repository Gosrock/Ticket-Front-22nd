import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import minu from '../../assets/title.gif';
import minuMobile from '../../assets/titleMobile.gif';
import useScroll from '../../hooks/useScroll';
const TitleSection = ({ isPC }: { isPC: boolean }) => {
  const { scrollY } = useScroll();

  return (
    <Wrapper isPC={isPC}>
      <BackGroundWrapper>
        <BackGround
          isPC={isPC}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
              scrollY / 900
            }), rgba(0, 0, 0, ${scrollY / 900})), url(${
              isPC ? minu : minuMobile
            })`,
          }}
        ></BackGround>
      </BackGroundWrapper>
    </Wrapper>
  );
};
export default TitleSection;

const Wrapper = styled.div<{ isPC: boolean }>`
  height: ${({ isPC }) => (isPC ? '100vh' : '520px')};
  width: 100%;
  position: relative;
  /*
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
`;

const BackGroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.point.lavenderDark};
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackGround = styled.div<{ isPC: boolean }>`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ isPC }) => (isPC ? '100%' : '520px')};
  background-size: cover;
  background-position: center center;
`;
