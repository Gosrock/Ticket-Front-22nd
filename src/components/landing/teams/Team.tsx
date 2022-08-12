import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as KakaoLogo } from '../../assets/icons/kakao.svg';
import { ReactComponent as Share } from '../../assets/icons/share.svg';
import { ITeamData } from './TeamData';
import { media } from '../../../styles/theme';

const Team = ({ date, order, teamName, members }: ITeamData) => {
  return (
    <Wrapper date={date}>
      <p>
        #{order} {teamName}
      </p>
      <Members date={date}>
        {members.map(
          (
            el: {
              parts: string;
              name: string;
              blank?: boolean;
            },
            idx: number,
          ) => {
            return el.blank !== true ? (
              <div key={idx}>
                <p>
                  {el.parts} {el.name}
                </p>
              </div>
            ) : (
              <div className="blank blank_width" />
            );
          },
        )}
      </Members>
    </Wrapper>
  );
};
export default Team;

const Wrapper = styled.div<{
  date: 'YB' | 'OB';
}>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  flex-direction: column;
  ${({ date, theme }) =>
    date === 'YB'
      ? css`
          background-color: ${theme.palette.mono.black_12};
        `
      : css`
          background-color: ${theme.palette.mono.white};
        `}
  border-radius: 24px;

  ${media.pc} {
    padding: 40px 20px 40px 28px;
  }
  ${media.mobile} {
    padding: 28px 8px 40px 16px;
    /* width: 298px; */
  }

  & > p {
    ${media.pc} {
      ${({ theme }) => theme.typo.landing.text_36_B};
      margin-bottom: 51px;
    }
    ${media.mobile} {
      ${({ theme }) => theme.typo.landing.text_22_B};
      margin-bottom: 32px;
    }

    ${({ date, theme }) =>
      date === 'YB'
        ? css`
            color: ${theme.palette.point.lavender};
          `
        : css`
            color: ${theme.palette.point.red};
          `}
  }
`;

const Members = styled.div<{
  date: 'YB' | 'OB';
}>`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 8px 8px 0px;

    ${media.pc} {
      padding: 18px;
      height: 38px;
    }
    ${media.mobile} {
      padding: 16px;
      height: 30px;
    }

    border-radius: 19px;
    ${({ date, theme }) =>
      date === 'YB'
        ? css`
            background-color: ${theme.palette.mono.black_26};
            color: ${theme.palette.mono.white};
          `
        : css`
            background-color: ${theme.palette.mono.white_fa};
            color: ${theme.palette.mono.black_00};
          `}

    & > p {
      ${media.pc} {
        ${({ theme }) => theme.typo.landing.text_18_B}
      }
      ${media.mobile} {
        ${({ theme }) => theme.typo.text_14_M}
      }
    }
  }

  .blank {
    width: 100%;
    background: none;
    padding: 0;
    ${media.pc} {
      height: 32px;
    }
    ${media.mobile} {
      height: 22px;
    }
  }
`;
