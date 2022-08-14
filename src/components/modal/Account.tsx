import styled, { css } from 'styled-components';
import ModalButton from '../common/ModalButton';
import { ReactComponent as Quit } from '../../assets/icons/modalQuit.svg';
import { ReactComponent as ArrowShort } from '../../assets/icons/arrowShort.svg';
import { useToast } from '../../hooks/useToast';
import { darken } from 'polished';
export type AccountProps = {
  closeModal: () => void;
};

const Account = ({ closeModal }: AccountProps) => {
  const { fireToast } = useToast();

  const copyNumber = () => {
    navigator.clipboard.writeText('100026465446');
    fireToast('계좌가 복사되었어요');
  };

  const kakaoClickButtonHandler = (price: number) => {
    const openInNewTab = (url: string) => {
      const newWindow = window.open(url);

      setTimeout(() => {
        return newWindow!.close();
      }, 3000);
    };

    const url = `https://qr.kakaopay.com/FTy7260dI`;
    openInNewTab(url);
  };
  return (
    <Wrapper>
      <Quit onClick={closeModal} />
      <Head>
        <p>입금 계좌</p>

        <Button>
          <div>
            <p>1000-2646-5466</p>
            <p>토스뱅크 (박도연)</p>
          </div>
          <span onClick={copyNumber}>계좌 복사</span>
        </Button>
        <Button
          onClick={() => {
            kakaoClickButtonHandler(0);
          }}
        >
          <p>
            <span>카카오페이</span>로 송금하기
          </p>
          <ArrowShort />
        </Button>
      </Head>
      <ModalButton label="확인했어요" onClick={closeModal} />
    </Wrapper>
  );
};

export default Account;

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
    text-align: left;
    & > p:first-child {
      ${({ theme }) => theme.typo.text_16_R}
      font-weight: 700;
      color: ${({ theme }) => theme.palette.mono.black_12};
    }
    & > p:last-child {
      margin-top: 4px;
      ${({ theme }) => theme.typo.text_12_M}
      color: ${({ theme }) => theme.palette.mono.black_12};
    }
  }
  & > span {
    color: ${({ theme }) => theme.palette.mono.font_main};
    ${({ theme }) => theme.typo.tag_10_B}
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.palette.mono.font_sub};
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 9px;
  }
  & > p {
    text-align: left;
    ${({ theme }) => theme.typo.text_18_B}
    color: ${({ theme }) => theme.palette.mono.black_12};
    margin-bottom: 3px;
    z-index: 3;

    span {
      background: linear-gradient(
        180deg,
        rgba(255, 119, 133, 0) 53.11%,
        rgba(255, 235, 0, 0.7) 53.12%,
        rgba(255, 235, 0, 0.7) 99.99%,
        rgba(255, 235, 0, 0.7) 100%
      );
    }
  }

  margin-bottom: 12px;

  &:last-child:active {
    background: ${darken(0.05, '#eaeaec')};
  }
`;
