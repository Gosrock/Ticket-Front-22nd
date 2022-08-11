import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import MarginContainer from '../../components/landing/MarginContainer';

const Landing = () => {
  const isPC = useMediaQuery({ minWidth: 576 });
  const navigate = useNavigate();
  // const tickets = useGetTickets();
  // console.log(tickets);
  // const ticket = useGetTicket({ uuid: '0' });
  // console.log(ticket);

  return (
    <Wrapper>
      <Header>
        <MarginContainer>
          {isPC && (
            <>
              <a>gosrock</a>
              <Nav>
                <a>DAY1</a>
                <a>DAY2</a>
                <a>유의사항</a>
              </Nav>
            </>
          )}
        </MarginContainer>
      </Header>
      <Intro isPC={isPC}>
        <MarginContainer>asfasfd</MarginContainer>
      </Intro>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.mono.white};
`;

const Header = styled.div`
  height: 80px;
  width: 100%;
  & > div {
    ${({ theme }) => theme.typo.text_16_R}
    color:${({ theme }) => theme.palette.mono.black_00};
    display: flex;
    justify-content: center; //space-between,
    align-items: center;

    & > a {
      position: absolute;
      left: 32px;
      cursor: pointer;
    }
  }
`;

const Nav = styled.div`
  & > a:not(:last-child) {
    margin-right: 48px;
  }
  cursor: pointer;
  a:active {
    color: ${({ theme }) => theme.palette.mono.black_26};
  }
`;

const Intro = styled.div<{ isPC: boolean }>`
  color: red;
  ${({ isPC }) =>
    isPC
      ? css`
          padding: 160px 0 !important;
        `
      : css`
          padding: 60px 0;
        `};
`;
