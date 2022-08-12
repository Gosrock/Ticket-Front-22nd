import styled from 'styled-components';
import { ReactComponent as CheckFilled } from '../../assets/icons/checkOk.svg';
import { ReactComponent as CheckOutlined } from '../../assets/icons/check.svg';
import { useState } from 'react';
const CheckedTicket = ({}) => {
  const [Selected, SetSelected] = useState<boolean>(true);

  const CheckButtonClick = () => {
    SetSelected(!Selected);
  };

  return (
    <Wrapper>
      <Contents>
        <Item>
          <p>계좌명</p>
          <p>예금주</p>
          <p>입금액</p>
        </Item>
        <Line />
        <Content>
          <p>토스 1000-2646-5446</p>
          <p>박도연</p>
          <p>
            <span>5,000원</span>
          </p>
        </Content>
      </Contents>
      <UnderLine />
      <AccountButton>
        <span onClick={CheckButtonClick}>
          {Selected ? (
            <CheckOutlined cursor={'pointer'} />
          ) : (
            <CheckFilled cursor={'pointer'} />
          )}
          <p>입금했어요</p>
        </span>
        <span>
          <p>카카오페이로 송금하기</p>
        </span>
      </AccountButton>
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
  height: 72px;
  margin: 2px 0;
  padding: 0px 18px 0px 16px;
  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  width: 55px;
  height: 19px;
  padding: 3px 0px;

  & p {
    ${({ theme }) => theme.typo.text_14_R};
    color: ${({ theme }) => theme.palette.mono.font_sub};
    margin-bottom: 16px;
  }
  & :last-child {
    margin: 0;
  }
`;

const Line = styled.hr`
  width: 0px;
  height: 72px;
  margin: 2px 12px 0px 7px;

  border: none;
  border-left: 1px solid ${({ theme }) => theme.palette.mono.black_36};
`;

const UnderLine = styled.hr`
  width: 100%;
  height: 0px;

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.mono.black_36};
  margin-top: 20px;
`;

const AccountButton = styled.div`
  height: 22px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 0px 16px 0px 16px;
  justify-content: space-between;

  & p {
    padding: 3px 0px 0px 12px;
    ${({ theme }) => theme.typo.text_14_R};
    color: ${({ theme }) => theme.palette.mono.font_sub};
    margin-bottom: 16px;
  }

  & span {
    display: flex;
    flex-direction: row;
  }
`;

const Content = styled.div`
  height: 110px;
  padding: 3px 0px;

  & p {
    ${({ theme }) => theme.typo.text_14_R};
    color: ${({ theme }) => theme.palette.mono.white};
    margin-bottom: 16px;
  }

  & span {
    color: ${({ theme }) => theme.palette.point.red};
  }
`;
