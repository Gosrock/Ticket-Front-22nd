import styled from 'styled-components';

const DaySelect = () => {
  return (
    <>
      <Wrapper>
        <Contents>
          <input type="checkbox" />
          <Item>
            <p>DAY1 : YB</p>
            <p>9월 1일 목요일</p>
          </Item>
        </Contents>
      </Wrapper>
      <Wrapper>
        <Contents>
          <input type="checkbox" />
          <Item>
            <p>DAY2 : OB</p>
            <p>9월 2일 금요일</p>
          </Item>
        </Contents>
      </Wrapper>
    </>
  );
};
export default DaySelect;

const Wrapper = styled.div`
  width: 98%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 18px;
  padding: 18px 18px 18px 16px;
  margin-bottom: 20px;
`;

const Contents = styled.div`
  height: 45px;
  margin: -10px 0;

  display: flex;
  flex-direction: row;

  & input {
    width: 20px;
    height: 20px;
    margin-top: 15px;
  }
`;

const Item = styled.div`
  width: 200px;
  height: 110px;
  padding: 3px 0px;

  & p {
    ${({ theme }) => theme.typo.text_14_M};
    color: ${({ theme }) => theme.palette.mono.font_placeholder};
    margin-bottom: 5px;
    margin-left: 20px;
    font-size: 20px;
  }
`;
