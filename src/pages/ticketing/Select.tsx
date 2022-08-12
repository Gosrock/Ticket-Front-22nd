import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import styled from 'styled-components';
import DaySelect from '../../components/ticketing/DaySelect';
import TicketCount from '../../components/ticketing/TicketCount';
import ButtonSet from '../../components/common/ButtonSet';
import { useEffect, useState } from 'react';

export type TSelectedDateType = {
  day1: boolean;
  day2: boolean;
};

const Select = () => {
  const [selectedDate, setSelectedDate] = useState<TSelectedDateType>({
    day1: false,
    day2: false,
  });
  const [selectedCount, setSelectedCount] = useState<1 | 2 | 3>(1);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (selectedDate.day1 || selectedDate.day2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [selectedCount, selectedDate]);

  return (
    <>
      <AppBar label={'뒤로가기'} />
      <SetMargin>
        <Title>날짜를 선택해 주세요</Title>
        <DaySelect selected={selectedDate} setSelected={setSelectedDate} />
        <Content>
          <p>
            양일 모두 구매시 <span>17%</span> 할인
          </p>
        </Content>
        <Title>티켓 매수를 선택해주세요</Title>
        <TicketCount selected={selectedCount} setSelected={setSelectedCount} />
      </SetMargin>
      <ButtonSet buttonDisabled={buttonDisabled}></ButtonSet>
    </>
  );
};

export default Select;

const Title = styled.p`
  ${({ theme }) => theme.typo.text_18_B};
  color: ${({ theme }) => theme.palette.mono.white_fa};
  margin-bottom: 16px;
`;

const Content = styled.div`
  padding: 3px 0px;
  margin-top: 10px;
  margin-bottom: 40px;

  & p {
    ${({ theme }) => theme.typo.text_14_R};
    color: ${({ theme }) => theme.palette.mono.font_sub};
  }
  & :last-child {
    margin: 0;
  }
  & span {
    color: ${({ theme }) => theme.palette.point.red};
  }
`;
