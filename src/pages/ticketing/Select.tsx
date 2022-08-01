import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import styled from 'styled-components';
import DaySelect from '../../components/ticketing/DaySelect';
import TicketNum from '../../components/ticketing/TicketNum';
import ButtonSet from '../../components/common/ButtonSet';

const Select = () => {
  return (
    <>
      <AppBar label={'뒤로가기'} />
      <SetMargin>
        <Title>날짜를 선택해 주세요</Title>
        <DaySelect></DaySelect>
        <Content>
          <p>
            양일 모두 구매시 <span>17%</span> 할인
          </p>
        </Content>
        <Title>티켓 매수를 선택해주세요</Title>
        <TicketNum></TicketNum>
      </SetMargin>
      <ButtonSet></ButtonSet>
    </>
  );
};

export default Select;

const Title = styled.p`
  ${({ theme }) => theme.typo.text_18_B};
  color: ${({ theme }) => theme.palette.mono.white_fa};
  margin-bottom: 24px;
`;

const Content = styled.div`
  height: 110px;
  padding: 3px 0px;
  margin-bottom: -40px;

  & p {
    ${({ theme }) => theme.typo.text_14_R};
    color: ${({ theme }) => theme.palette.mono.font_sub};
    margin-bottom: 16px;
  }
  & :last-child {
    margin: 0;
  }
  & span {
    color: ${({ theme }) => theme.palette.point.red};
  }
`;
