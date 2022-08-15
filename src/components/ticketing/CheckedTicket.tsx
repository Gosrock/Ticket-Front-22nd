import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import useGetUserInfo from '../../hooks/queries/useGetUserInfo';
import { authState } from '../../stores/auth';
import { IOptionType } from '../../stores/option';

const renderContent = {
  YB: <p>9월 1일 목요일</p>,
  OB: <p>9월 2일 금요일</p>,
  BOTH: (
    <p>
      양일권 <span>(할인 적용)</span>
    </p>
  ),
};

const CheckedTicket = ({ option }: { option: IOptionType }) => {
  const { status, data } = useGetUserInfo();
  return (
    <Wrapper>
      <Contents>
        <div>
          <p>입금자명</p>
          <p>관람날짜</p>
          <p>티켓매수</p>
        </div>
        <Line />
        <div>
          <p>{data?.data.name}</p>
          {renderContent[option.date!]}
          {option.date === 'BOTH' ? (
            <p>
              {option.count}매 (총 {option.count * 2}매)
            </p>
          ) : (
            <p>{option.count}매</p>
          )}
        </div>
      </Contents>
    </Wrapper>
  );
};
export default CheckedTicket;

const Wrapper = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 8px;
  padding: 20px 16px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    & p {
      ${({ theme }) => theme.typo.text_14_R};
      color: ${({ theme }) => theme.palette.mono.font_sub};
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }

  & > div:last-child {
    & p {
      ${({ theme }) => theme.typo.text_14_R};
      color: ${({ theme }) => theme.palette.mono.white};
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    & span {
      color: ${({ theme }) => theme.palette.point.red};
    }
  }
`;

const Line = styled.div`
  width: 1px;
  height: 90px;
  margin: 0 12px;
  background-color: ${({ theme }) => theme.palette.mono.black_36};
`;
