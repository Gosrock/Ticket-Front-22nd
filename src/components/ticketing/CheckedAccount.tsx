import styled from 'styled-components';
import { ReactComponent as CheckFilled } from '../../assets/icons/checkOk.svg';
import { ReactComponent as CheckOutlined } from '../../assets/icons/check.svg';
import { useToast } from '../../hooks/useToast';
import { optionState } from '../../stores/option';
import { useRecoilValue } from 'recoil';

type CheckedTicketType = {
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckedTicket = ({ selected, setSelected }: CheckedTicketType) => {
  const { fireToast } = useToast();
  const option = useRecoilValue(optionState);
  const copyNumber = () => {
    navigator.clipboard.writeText('100026465446');
    fireToast('계좌가 복사되었어요');
  };

  const price =
    option.date === 'BOTH' ? 5000 * option.count : 3000 * option.count;

  const kakaoClickButtonHandler = (price: number) => {
    const toHexValue = (price: number) => {
      return (price * 524288).toString(16);
    };
    const openInNewTab = (url: string) => {
      const newWindow = window.open(url);

      setTimeout(() => {
        return newWindow!.close();
      }, 3000);
    };

    const url = `https://qr.kakaopay.com/FTy7260dI${toHexValue(price)}`;
    openInNewTab(url);
  };

  return (
    <Wrapper>
      <Contents>
        <div>
          <p>계좌명</p>
          <p>예금주</p>
          <p>입금액</p>
        </div>
        <Line />
        <div>
          <p>
            토스 1000-2646-5446{' '}
            <span className="copy" onClick={copyNumber}>
              계좌 복사
            </span>
          </p>
          <p>박도연</p>
          <p>
            <span>{price.toLocaleString('ko-KR')}원</span>
          </p>
        </div>
      </Contents>
      <div>
        <UnderLine />
        <AccountButton selected={selected}>
          <div
            onClick={() => {
              setSelected(!selected);
            }}
          >
            {selected ? <CheckFilled /> : <CheckOutlined />}
            <p>입금했어요</p>
          </div>
          <button
            onClick={() => {
              kakaoClickButtonHandler(price);
            }}
          >
            카카오페이로 송금하기
          </button>
        </AccountButton>
      </div>
    </Wrapper>
  );
};
export default CheckedTicket;

const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  /* justify-content: space-between;  */
  flex-direction: column;

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 8px;
  padding: 18px 0px 12px 0px;
`;

const Contents = styled.div`
  padding: 0px 18px 0px 16px;
  display: flex;
  flex-direction: row;

  & > div:first-child {
    & p {
      ${({ theme }) => theme.typo.text_14_R};
      color: ${({ theme }) => theme.palette.mono.font_sub};
      margin-bottom: 16px;
    }
    & :last-child {
      margin: 0;
    }
  }

  & > div:last-child {
    & p {
      ${({ theme }) => theme.typo.text_14_R};
      color: ${({ theme }) => theme.palette.mono.white};
      margin-bottom: 16px;
    }

    & span {
      color: ${({ theme }) => theme.palette.point.red};
    }
  }

  .copy {
    color: ${({ theme }) => theme.palette.mono.font_sub} !important;
    ${({ theme }) => theme.typo.tag_10_B}
    padding: 2px 8px;
    padding-bottom: 3px;
    background-color: ${({ theme }) => theme.palette.mono.black_36};
    border-radius: 8px;
    margin-left: 8px;
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 72px;
  margin-right: 12px;
  margin-left: 25px;
  background-color: ${({ theme }) => theme.palette.mono.black_36};
`;

const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.mono.black_36};
`;

const AccountButton = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 12px 16px;
  margin-top: 13px;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.typo.text_14_R};
  color: ${({ theme, selected }) =>
    selected ? theme.palette.point.lavender : theme.palette.mono.font_sub};

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      margin-left: 12px;
    }
  }
  button {
    ${({ theme }) => theme.typo.text_14_R};
    color: ${({ theme }) => theme.palette.mono.font_sub};
    text-decoration: underline;
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
  }
`;
