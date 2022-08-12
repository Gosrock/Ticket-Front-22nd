import styled, { css } from 'styled-components';
import ticket1_PNG from '../../assets/icons/ticket_1.png';
import ticket2_PNG from '../../assets/icons/ticket_2.png';
import ticket3_PNG from '../../assets/icons/ticket_3.png';
import { useEffect, useState } from 'react';
import { TSelectedCountType } from '../../pages/ticketing/Select';

type TicketNumSelectProps = {
  selected: TSelectedCountType;
  setSelected: React.Dispatch<React.SetStateAction<TSelectedCountType>>;
};

const TicketNum = ({ selected, setSelected }: TicketNumSelectProps) => {
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const onTicketNumButtonClick = (num:'n1'|'n2'|'n3') => {
    setSelected({ ...selected, [num]: !selected[num] });
  };

  return (
    <Wrapper>
      <CountButton onClick={() => { onTicketNumButtonClick('n1'); }}
        // selected={selected === 1 ? }
        selected={selected.n1}
      >
        <Ticket>
          <img src={ticket1_PNG} />
        </Ticket>
        <p>1매</p>
      </CountButton>
      <CountButton onClick={() => { onTicketNumButtonClick('n2'); }}
        selected={selected.n2}
      >
        <Ticket>
          <img src={ticket2_PNG} />
        </Ticket>
        <p>2매</p>
      </CountButton>
      <CountButton onClick={() => { onTicketNumButtonClick('n3'); }}
        selected={selected.n3}
      >
        <Ticket>
          <img src={ticket3_PNG} />
        </Ticket>
        <p>3매</p>
      </CountButton>
    </Wrapper>
  );
};
export default TicketNum;

const Wrapper = styled.div`
  width: 101.4px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;

const CountButton = styled.div<{selected: boolean}>`
  height: 120px;
  padding: 20px;
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
        `}
  
`;

const Ticket = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 60px;
    height: 60px;
    margin: 12px 0px;
  }
`;
