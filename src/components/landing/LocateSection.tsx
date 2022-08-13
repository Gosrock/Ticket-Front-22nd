import styled, { css } from 'styled-components';
import alive from '../../assets/landing/alive.png';
import dream from '../../assets/landing/dream.png';
import { media } from '../../styles/theme';
import MarginContainer from './MarginContainer';
const LocateSection = ({ isPC }: { isPC: boolean }) => {
  return (
    <Wrapper>
      <MarginContainer>
        <MapboxR isPC={isPC}>
          <Textbox>
            <h1>
              <span>DAY 1</span> YB 공연
            </h1>
            <h3>마포구 서교동 양화로 64</h3>
            <h1>드림홀</h1>
          </Textbox>
          <Map isPC={isPC}>
            <img src={dream} />
          </Map>
        </MapboxR>
        <MapboxL isPC={isPC}>
          <Map isPC={isPC}>
            <img src={alive} />
          </Map>
          <Textbox>
            <h1>
              <span>DAY 2</span> OB 공연
            </h1>
            <h3>마포구 서교동 401-6</h3>
            <h1>얼라이브홀</h1>
          </Textbox>
        </MapboxL>
      </MarginContainer>
    </Wrapper>
  );
};
export default LocateSection;

const Wrapper = styled.div`
  padding: 80px 0px;
  background-color: ${({ theme }) => theme.palette.mono.font_main};
  & > h2 {
    ${({ theme }) => theme.typo.landing.title_48_B}
  }
`;

const MapboxR = styled.div<{ isPC: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 64px;

  & > div:first-child {
    z-index: 5;
    ${({ isPC }) =>
      isPC
        ? css`
            margin-right: -25px;
          `
        : css`
            margin-right: -25px;
            ${media.custom(470)} {
              position: absolute;
              left: 0px;
            }
          `}
  }
`;
const MapboxL = styled.div<{ isPC: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  & > div:last-child {
    z-index: 5;
    ${({ isPC }) =>
      isPC
        ? css`
            margin-left: -25px;
          `
        : css`
            margin-left: -25px;
            ${media.custom(470)} {
              position: absolute;
              right: 0px;
            }
          `}
  }
`;

const Map = styled.div<{ isPC: boolean }>`
  & > img {
    ${({ isPC }) =>
      isPC
        ? css`
            width: 350px;
            height: 350px;
          `
        : css`
            width: 60vw;
            max-width: 350px;
            min-width: 200px;
            height: auto;
          `}
  }
  filter: drop-shadow(0px 4px 33px rgba(0, 0, 0, 0.1));
`;

const Textbox = styled.div`
  color: ${({ theme }) => theme.palette.mono.black_12};

  & > h1 {
    ${({ theme }) => theme.typo.landing.title_48_B}
  }
  & > h3 {
    ${({ theme }) => theme.typo.text_18_B}

    margin-top: 32px;
    margin-bottom: 8px;
  }

  ${media.custom(680)} {
    & > h1 {
      ${({ theme }) => theme.typo.landing.title_24_B}
    }
    & > h3 {
      ${({ theme }) => theme.typo.text_12_M}

      margin-top: 24px;
      margin-bottom: 4px;
    }
  }

  & > h1 {
    & > span {
      background: linear-gradient(
        180deg,
        rgba(255, 119, 133, 0) 53.11%,
        rgba(255, 119, 133, 0.5) 53.12%,
        rgba(255, 119, 133, 0.5) 99.99%,
        rgba(255, 119, 133, 0.5) 100%
      );
    }
    &:last-child {
      margin-left: -3px;
    }
  }
`;
