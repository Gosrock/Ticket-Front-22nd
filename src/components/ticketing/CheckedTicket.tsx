import styled from 'styled-components';

const CheckedTicket = () => {
  return (
    <Wrapper>
      <Contents>
        <Item>
          <p>입금자명</p>
          <p>관람날짜</p>
          <p>티켓매수</p>
        </Item>
        <Line />
        <Content>
          <p>한규진</p>
          <p>
            양일권 <span>(할인 적용)</span>
          </p>
          <p>2매 (총 4매)</p>
        </Content>
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
  padding: 20px 18px 20px 16px;
`;

const Contents = styled.div`
  height: 90px;

  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  width: 55px;
  height: 19px;
  padding: 7px 0px;

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
  height: 90px;
  margin: 0px 12px 0px 7px;

  border: none;
  border-left: 1px solid ${({ theme }) => theme.palette.mono.black_36};
`;

const Content = styled.div`
  height: 110px;
  padding: 7px 0px;

  & p {
    ${({ theme }) => theme.typo.text_14_R};
    color: ${({ theme }) => theme.palette.mono.white};
    margin-bottom: 16px;
  }
  & :last-child {
    margin: 0;
  }
  & span {
    color: ${({ theme }) => theme.palette.point.red};
  }
`;
