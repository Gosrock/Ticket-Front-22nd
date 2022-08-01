import styled from 'styled-components';
import ticketPNG from '../../assets/icons/ticket-select.png';
const DaySelect = () => {
  return (
    <Wrapper>
      <CountButton>
        <Ticket>
          <img src={ticketPNG} />
        </Ticket>
        <p>1매</p>
      </CountButton>
      <CountButton></CountButton>
      <CountButton></CountButton>
    </Wrapper>
  );
};
export default DaySelect;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;

const CountButton = styled.div`
  height: 120px;
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.mono.black_26};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > p {
    text-align: center;
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
