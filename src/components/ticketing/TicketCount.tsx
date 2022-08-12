import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import ticket1_PNG from '../../assets/icons/ticket_1.png';
import ticket2_PNG from '../../assets/icons/ticket_2.png';
import ticket3_PNG from '../../assets/icons/ticket_3.png';

type TicketNumSelectProps = {
  selected: 1 | 2 | 3;
  setSelected: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
};

const TickeCount = ({ selected, setSelected }: TicketNumSelectProps) => {
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <Wrapper>
      <CountButton
        onClick={() => {
          setSelected(1);
        }}
        selected={selected === 1}
      >
        <Ticket>
          <img src={ticket1_PNG} />
        </Ticket>
        <p>1매</p>
      </CountButton>
      <CountButton
        onClick={() => {
          setSelected(2);
        }}
        selected={selected === 2}
      >
        <Ticket>
          <img src={ticket2_PNG} />
        </Ticket>
        <p>2매</p>
      </CountButton>
      <CountButton
        onClick={() => {
          setSelected(3);
        }}
        selected={selected === 3}
      >
        <Ticket>
          <img src={ticket3_PNG} />
        </Ticket>
        <p>3매</p>
      </CountButton>
    </Wrapper>
  );
};
export default TickeCount;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;

const CountButton = styled.button<{ selected: boolean }>`
  height: 120px;
  padding: 12px 12px 20px 12px;
  border-radius: 16px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > p {
    text-align: center;
    ${({ theme }) => theme.typo.title_24_B};
  }

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${({ theme }) => theme.palette.point.lavenderDark};
          border: 1px solid ${({ theme }) => theme.palette.point.lavender};
        `
      : css`
          background-color: ${({ theme }) => theme.palette.mono.black_26};
          border: 1px solid ${({ theme }) => theme.palette.mono.black_26};
        `}
`;

const Ticket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    height: 60px;
  }
`;
