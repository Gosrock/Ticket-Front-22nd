import styled, { css } from 'styled-components';
import { ReactComponent as CheckFilled } from '../../assets/icons/checkOk.svg';
import { ReactComponent as CheckOutlined } from '../../assets/icons/check.svg';
import { useEffect, useState } from 'react';
import { TSelectedDateType } from '../../pages/ticketing/Select';

type DaySelectProps = {
  selected: TSelectedDateType;
  setSelected: React.Dispatch<React.SetStateAction<TSelectedDateType>>;
};

const DaySelect = ({ selected, setSelected }: DaySelectProps) => {
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const onDateButtonClick = (date: 'day1' | 'day2') => {
    setSelected({ ...selected, [date]: !selected[date] });
  };

  return (
    <Wrapper>
      <DateButton
        onClick={() => {
          onDateButtonClick('day1');
        }}
      >
        {selected.day1 ? <CheckFilled /> : <CheckOutlined />}
        <Item selected={selected.day1}>
          <span>DAY1 : YB</span>
          <p>9월 1일 목요일</p>
        </Item>
      </DateButton>
      <DateButton
        onClick={() => {
          onDateButtonClick('day2');
        }}
      >
        {selected.day2 ? <CheckFilled /> : <CheckOutlined />}
        <Item selected={selected.day2}>
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

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 18px;
  padding: 13px 18px 13px 16px;
  cursor: pointer;
`;

const Item = styled.div<{ selected: boolean }>`
  margin-left: 16px;
  ${({ theme }) => theme.typo.text_18_M};
  ${({ selected }) =>
    selected
      ? css`
          span {
            color: ${({ theme }) => theme.palette.point.lavender};
          }
          p {
            color: ${({ theme }) => theme.palette.mono.white};
          }
        `
      : css`
          color: ${({ theme }) => theme.palette.mono.font_placeholder};
        `}
  & p {
    margin-top: 6px;
  }
`;
