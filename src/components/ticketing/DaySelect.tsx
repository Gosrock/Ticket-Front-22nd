import styled from 'styled-components';
import { ReactComponent as CheckFilled } from '../../assets/icons/checkOk.svg';
import { ReactComponent as CheckOutlined } from '../../assets/icons/check.svg';

const DaySelect = () => {
  return (
    <Wrapper>
      <DateButton>
        <CheckOutlined />
        <Item>
          <p>DAY1 : YB</p>
          <p>9월 1일 목요일</p>
        </Item>
      </DateButton>
      <DateButton>
        <input type="checkbox" />
        <Item>
          <p>DAY2 : OB</p>
          <p>9월 2일 금요일</p>
        </Item>
      </DateButton>
    </Wrapper>
  );
};
export default DaySelect;

const Wrapper = styled.div`
  & > div:first-child {
    margin-bottom: 16px;
  }
`;

const DateButton = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 18px;
  padding: 18px 18px 18px 16px;
`;

const Item = styled.div`
  ${({ theme }) => theme.typo.text_18_M};
`;
