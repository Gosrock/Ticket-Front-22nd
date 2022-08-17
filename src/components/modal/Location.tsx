import styled, { css } from 'styled-components';
import ModalButton from '../common/ModalButton';
import { ReactComponent as Quit } from '../../assets/icons/modalQuit.svg';
import { ReactComponent as ArrowShort } from '../../assets/icons/arrowShort.svg';
import { darken } from 'polished';
export type LocationProps = {
  closeModal: () => void;
};

const Location = ({ closeModal }: LocationProps) => {
  return (
    <Wrapper>
      <Quit onClick={closeModal} />
      <Head>
        <p>오시는 길</p>
        <Button
          onClick={() => window.open('https://naver.me/x7vBOICy', '_blank')}
        >
          <div>
            <p>
              <span>DAY1</span> YB 공연
            </p>
            <p>드림홀 (서교동 양화로 64)</p>
          </div>
          <ArrowShort />
        </Button>
        <Button
          onClick={() => window.open('https://naver.me/F7C4jF2R', '_blank')}
        >
          <div>
            <p>
              <span>DAY2</span> OB 공연
            </p>
            <p>얼라이브홀 (서교동 독막로7길 20)</p>
          </div>
          <ArrowShort />
        </Button>
      </Head>
      <ModalButton label="확인했어요" onClick={closeModal} />
    </Wrapper>
  );
};

export default Location;

const Wrapper = styled.div`
  position: relative;
  z-index: 110;
  height: 100%;
  box-sizing: border-box;
  padding: 36px 36px 24px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > svg {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }
`;

const Head = styled.div`
  ${({ theme }) => theme.typo.text_18_B}
  color: ${({ theme }) => theme.palette.mono.black_00};
  & > p {
    margin-bottom: 36px;
  }
`;

const Button = styled.button`
  height: 66px;
  width: 100%;
  border-radius: 12px;
  background-color: #eaeaec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  & > div {
    & > p:first-child {
      text-align: left;
      ${({ theme }) => theme.typo.text_18_B}
      color: ${({ theme }) => theme.palette.mono.black_12};
      margin-bottom: 6px;
      z-index: 3;

      span {
        background: linear-gradient(
          180deg,
          rgba(255, 119, 133, 0) 53.11%,
          rgba(255, 119, 133, 0.5) 53.12%,
          rgba(255, 119, 133, 0.5) 99.99%,
          rgba(255, 119, 133, 0.5) 100%
        );
      }
    }
    & > p:last-child {
      ${({ theme }) => theme.typo.text_12_M}
      color: ${({ theme }) => theme.palette.mono.black_26};
    }
  }

  margin-bottom: 12px;
  ${({ theme }) => {
    return css`
      &:active {
        background: ${darken(0.05, '#eaeaec')};
      }
    `;
  }}
`;
