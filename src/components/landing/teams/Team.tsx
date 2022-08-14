import styled, { css } from 'styled-components';
import { ITeamData } from './TeamData';

interface ITeam extends ITeamData {
  isPC: boolean;
}

const Team = ({ date, order, teamName, members, isPC }: ITeam) => {
  return (
    <Wrapper date={date} isPC={isPC}>
      <p>
        #{order} {teamName}
      </p>
      <Members date={date} isPC={isPC}>
        {members.map(
          (
            el: {
              parts: string;
              name: string;
            },
            idx: number,
          ) => {
            return (
              <div key={idx}>
                <p>
                  {el.parts} {el.name}
                </p>
              </div>
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
  isPC: boolean;
}>`
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

  ${({ isPC }) =>
    isPC
      ? css`
          width: 382px;
          padding: 40px 20px 40px 28px;
        `
      : css`
          width: 299px;
          padding: 28px 8px 40px 16px;
          margin: 0 18px;
        `}

  & > p {
    ${({ theme, isPC }) =>
      isPC
        ? css`
            ${theme.typo.landing.text_36_B}
            margin-bottom: 51px;
          `
        : css`
            ${theme.typo.landing.text_22_B}
            margin-bottom: 32px;
          `}

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
  isPC: boolean;
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

    ${({ isPC }) =>
      isPC
        ? css`
            padding: 18px;
            height: 38px;
          `
        : css`
            padding: 16px;
            height: 30px;
          `}

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
      ${({ theme, isPC }) =>
        isPC
          ? css`
              ${theme.typo.landing.text_18_B}
            `
          : css`
              ${theme.typo.text_14_M}
            `}
    }
  }
`;
