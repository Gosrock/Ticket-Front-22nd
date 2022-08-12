import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import styled from 'styled-components';
import ButtonSet from '../../components/common/ButtonSet';
import CheckedTicket from '../../components/ticketing/CheckedTicket';
import CheckedAccount from '../../components/ticketing/CheckedAccount';

const Check = () => {
  return (
    <>
      <AppBar label={'마이페이지'} />
      <SetMargin>
        <Title>티켓 구매 전, 확인해주세요</Title>
        <CheckedTicket></CheckedTicket>
        <Content></Content>
        <Title>
          <p>아래 계좌로 입금하고</p>예매를 완료해주세요
        </Title>
      </SetMargin>
      <ButtonSet></ButtonSet>
    </>
  );
};

export default Check;

const Title = styled.p`
  ${({ theme }) => theme.typo.text_18_B};
  color: ${({ theme }) => theme.palette.mono.white_fa};
  margin-bottom: 16px;

  & p {
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  margin-bottom: 32px;
`;
