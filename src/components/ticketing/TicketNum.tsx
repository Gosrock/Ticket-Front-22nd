import styled from 'styled-components';
import TicketImg from '../assets/icons/ticketimg.svg';

const DaySelect = () => {
  return (
    <>
      <Wrapper>
        <Contents>
          <Item>
            <p>1매</p>
          </Item>
        </Contents>
      </Wrapper>
      <Wrapper>
        <Contents>
          <Item>
            <p>1매</p>
          </Item>
        </Contents>
      </Wrapper>
      <Wrapper>
        <Contents>
          <Item>
            <p>1매</p>
          </Item>
        </Contents>
      </Wrapper>
    </>
  );
};
export default DaySelect;

const Wrapper = styled.div`
  width: 30%;
  height: 122px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  float: left;
  margin-right: 10px;

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 18px;
  padding: 18px 18px 18px 16px;
`;

const Contents = styled.div`
  height: 45px;
  width: 25px;
  margin: -10px 0;

  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  width: 200px;
  height: 110px;
  padding: 70px 0px;

  & p {
    width: 30px;
    ${({ theme }) => theme.typo.text_14_M};
    color: ${({ theme }) => theme.palette.mono.white};
    margin-bottom: 5px;
    margin-left: 20px;
    font-size: 20px;
  }
`;

const Line = styled.hr`
  width: 0px;
  height: 110px;
  margin: 0 12px 0px 7px;

  border: none;
  border-left: 1px solid ${({ theme }) => theme.palette.mono.black_36};
`;

const Content = styled.div`
  height: 110px;
  padding: 3px 0px;

  & p {
    ${({ theme }) => theme.typo.text_14_M};
    color: ${({ theme }) => theme.palette.mono.white};
    margin-bottom: 16px;
  }
  & :last-child {
    margin: 0;
  }
  & span {
    color: ${({ theme }) => theme.palette.point.red};
  }
`;
