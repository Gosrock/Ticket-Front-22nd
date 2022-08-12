import styled from 'styled-components';
import { ReactComponent as CheckFilled } from '../../assets/icons/checkOk.svg';
import { ReactComponent as CheckOutlined } from '../../assets/icons/check.svg';
import { useState } from 'react';


const DaySelect = () => {

  // const [Selected, setSelected] = useState<String>("");

  // const DateButtonClick = (e: { target: { value: String; }; }) => {
  //   setSelected((prev) => {return e.target.value});
  // };

  const [Selected, setSelected] = useState<boolean>(true);

  const DateButtonClick = () => {
    setSelected(!Selected);
  };


  return (
    <Wrapper>
      <DateButton onClick={DateButtonClick} className={Selected ? "NotSelected" : "DateSelected"}>
        {Selected ? <CheckOutlined /> : <CheckFilled />}
        <Item>
            <span>DAY1 : YB</span>
            <p>9월 1일 목요일</p>
          </Item>
        </DateButton>
        <DateButton>
        {/* {Selected ? <CheckOutlined /> : <CheckFilled />} */}
        <CheckOutlined />
        <Item>
            <span>DAY2 : OB</span>
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
  padding: 13px 18px 13px 16px;
  cursor: pointer;

  & .DateSelected span{
    color: ${({ theme }) => theme.palette.point.lavender};
  }
  
  & .DateSelected p {
      color: ${({ theme }) => theme.palette.mono.white};
    }

  & .NotSelected{
    color: ${({ theme }) => theme.palette.mono.font_placeholder};
   
  }
  
`;

const Item = styled.div`

  ${({ theme }) => theme.typo.text_18_M};
  & .DateSelected{
    span {
      color: ${({ theme }) => theme.palette.point.lavender};
    }
    p {
      color: ${({ theme }) => theme.palette.mono.white};
    }
  }

  & .NotSelected{
    color: ${({ theme }) => theme.palette.mono.font_placeholder};
   
  }
  
  & p{
    margin-top: 6px;
  }
  

`;
