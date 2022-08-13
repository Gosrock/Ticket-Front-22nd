import styled from 'styled-components';
import AnimatedNumbers from 'react-animated-numbers';
import TicketApi from '../../apis/TicketApi';
import { useQuery } from 'react-query';
const CurrentSection = ({ isPC }: { isPC: boolean }) => {
  const { data } = useQuery('count', TicketApi.getTicketCount);
  const ticketCount = data?.data.count;
  return (
    <Wrapper isPC={isPC}>
      <h3>지금&nbsp;</h3>
      <div>
        &nbsp;
        {isPC ? (
          <AnimatedNumbers
            includeComma
            animateToNumber={ticketCount!}
            fontStyle={{ fontSize: 96, fontWeight: '700' }}
            configs={[
              { mass: 1, tension: 130, friction: 40 },
              { mass: 2, tension: 140, friction: 40 },
              { mass: 3, tension: 130, friction: 40 },
            ]}
          ></AnimatedNumbers>
        ) : (
          <AnimatedNumbers
            includeComma
            animateToNumber={ticketCount!}
            fontStyle={{ fontSize: 64, fontWeight: '700' }}
            configs={[
              { mass: 1, tension: 130, friction: 40 },
              { mass: 2, tension: 140, friction: 40 },
              { mass: 3, tension: 130, friction: 40 },
            ]}
          ></AnimatedNumbers>
        )}
        &nbsp;
      </div>
      <h3>&nbsp;명이 함께 하고 있어요.</h3>
    </Wrapper>
  );
};

export default CurrentSection;

const Wrapper = styled.div<{ isPC: boolean }>`
  width: 100%;
  background-color: #eaeaec;
  height: ${({ isPC }) => (isPC ? '296px' : '200px')};

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.palette.mono.black_12};
    ${({ isPC, theme }) =>
      isPC ? theme.typo.landing.title_24_B : theme.typo.landing.text_18_B}
  }
  div {
    padding-bottom: 5px;
    color: ${({ theme }) => theme.palette.point.red};
  }
`;
