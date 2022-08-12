import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import MarginContainer from '../../components/landing/MarginContainer';

import Team from '../../components/landing/teams/Team';

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
        <div
          style={{
            height: '1000px',
            background: '#372d3f',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Team
            date={'YB'}
            order={1}
            teamName={'돈까스 망치'}
            members={[
              {
                parts: 'V',
                name: '김원진',
              },
              {
                parts: 'G',
                name: '김민우',
              },
              {
                parts: 'G',
                name: '노경민',
              },
              {
                parts: 'B',
                name: '한규진',
              },
              {
                parts: 'K',
                name: '김민준',
              },
              {
                parts: 'D',
                name: '채승희',
              },
            ]}
          />
          <Team
            date={'YB'}
            order={4}
            teamName={'금예인팀'}
            members={[
              {
                parts: 'V',
                name: '박준서',
              },
              {
                parts: 'G',
                name: '김민우',
              },
              {
                parts: 'B',
                name: '강나연',
              },
              {
                parts: 'K',
                name: '금예인',
              },
              {
                parts: 'D',
                name: '반성준',
              },
              {
                parts: 'blank',
                name: 'blank',
                blank: true,
              },
              {
                parts: 'V',
                name: '김민우',
              },
              {
                parts: 'G',
                name: '김의현',
              },
            ]}
          />
          <Team
            date={'OB'}
            order={4}
            teamName={'A789'}
            members={[
              {
                parts: 'V',
                name: '양훈석',
              },
              {
                parts: 'C',
                name: '김하영',
              },
              {
                parts: 'G',
                name: '오상훈',
              },
              {
                parts: 'G,D',
                name: '정원우',
              },
              {
                parts: 'G',
                name: '오상호',
              },
              {
                parts: 'D',
                name: '박상우',
              },
              {
                parts: 'K',
                name: '이새롬',
              },
              {
                parts: 'B',
                name: '장문석',
              },
            ]}
          />
        </div>
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
