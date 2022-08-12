import styled from 'styled-components';
import ticketPNG from '../../assets/icons/ticket-select.png';
import { useState } from 'react';
import { bool } from 'prop-types';

const TicketNum = () => {

  const [isTicketNumSelected, setisTicketNumSelected] = useState<boolean>(false)
  // const [isTicketNumSelected, setisTicketNumSelected] = useState([
  //   {
  //     id: 1
  //   },
  //   {
  //     id: 2
  //   },
  //   {
  //     id: 3
  //   }
  // ]);
  // const Daylist =['1매', '2매', '3매'];

  // const handleClick = (idx : String) => {
	// const newArr = Array(Daylist.length).fill(false);
  //   newArr[idx] = true;
  //   setisTicketNumSelected(newArr);
// };
  
  const TicketNumButtonClick = () => {
    setisTicketNumSelected(!isTicketNumSelected);
  };

  return (
    <Wrapper>
      <CountButton onClick={TicketNumButtonClick} className={isTicketNumSelected ? "Selected" : "NotSelected"}>
        <Ticket>
          <img src={ticketPNG} />
        </Ticket>
        <p>1매</p>
      </CountButton>
      <CountButton>
        <Ticket>
          <img src={ticketPNG} />
        </Ticket>
        <p>2매</p>
      </CountButton>
      <CountButton>
        <Ticket>
          <img src={ticketPNG} />
        </Ticket>
        <p>3매</p>
      </CountButton>
    </Wrapper>
  );
};
export default TicketNum;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;

const CountButton = styled.div`
  height: 120px;
  padding: 20px;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.mono.black_26};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > p {
    text-align: center;
    ${({ theme }) => theme.typo.title_24_B};
  }

  & > .Selected {
    background-color: ${({ theme }) => theme.palette.point.lavenderDark};
    border-color: ${({ theme }) => theme.palette.point.lavender};
  }

  & > .NotSelected {
  }
`;

const Ticket = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 25px;
    margin: 0px 2px;
  }
`;
