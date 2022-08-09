import styled, { css } from 'styled-components';
import aliveHall from '../../../assets/maps/aliveHall.png';
import dreamHall from '../../../assets/maps/dreamHall.png';

export interface ISliderProps {
  titleDark: string;
  titleHighlight: string;
  content: string;
  contentWriter: string | null;
  team: 'YB' | 'OB' | null;
  onClick: () => void;
}

const Slider = ({
  titleDark,
  titleHighlight,
  content,
  contentWriter,
  team,
  onClick,
}: ISliderProps) => {
  return (
    <Wrapper team={team}>
      <BackgroundCover team={team}>
        <Contents>
          {contentWriter !== null ? (
            <>
              {content.length > 30 ? (
                <p>"{content.substring(0, 25)}..."</p>
              ) : (
                <p>"{content}"</p>
              )}
              <p>
                <span>from. {contentWriter}</span>
              </p>
            </>
          ) : (
            <p>{content}</p>
          )}
        </Contents>
        <Title onClick={onClick}>
          <p className="title">
            <span>{titleHighlight}</span> {titleDark}
          </p>
        </Title>
      </BackgroundCover>
    </Wrapper>
  );
};
export default Slider;

const Wrapper = styled.div<{ team: 'YB' | 'OB' | null }>`
  width: calc(100% - 36px);
  margin: 0px 18px;
  height: 180px;
  border-radius: 16px;
  ${({ team }) =>
    team
      ? team === 'YB'
        ? css`
            background: url(${dreamHall});
            background-size: auto 280px;
            background-position: center;
          `
        : css`
            background: url(${aliveHall});
            background-size: auto 280px;
            background-position: center;
          `
      : css`
          background: rgba(0, 0, 0, 0.49);
        `};
`;

const BackgroundCover = styled.div<{ team: 'YB' | 'OB' | null }>`
  padding: 23px 0px 46px 0px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  ${({ team }) =>
    !!team &&
    css`
      background: rgba(0, 0, 0, 0.7);
    `};
`;

const Contents = styled.div`
  width: calc(100% - 48px);
  height: 66px;
  white-space: pre-wrap;
  & p {
    ${({ theme }) => theme.typo.text_14_M};
    line-height: 16px;
  }
  & span {
    color: ${({ theme }) => theme.palette.point.red};
  }
`;

const Title = styled.div<{ onClick: () => void }>`
  padding: 5px 10px;
  height: 24px;
  background: ${({ theme }) => theme.palette.mono.white};
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    height: 14px;
    ${({ theme }) => theme.typo.text_14_M};
    text-align: center;
    letter-spacing: -0.408px;
    color: ${({ theme }) => theme.palette.point.lavenderDark};
  }
  & span {
    color: ${({ theme }) => theme.palette.point.lavender};
  }
`;
