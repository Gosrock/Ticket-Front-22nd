import styled, { css } from 'styled-components';
import map1 from '../../assets/maps/map1.png';
import map2 from '../../assets/maps/map2.png';

export interface ISliderProps {
  title: string;
  titleHighlight: string;
  content: string;
  contentWriter?: string;
  team: 'YB' | 'OB' | null;
  onClick: () => void;
}

const Slider = ({
  title,
  titleHighlight,
  content,
  contentWriter,
  team,
  onClick,
}: ISliderProps) => {
  return (
    <Wrapper team={team}>
      <Background team={team}>
        <Contents>
          {/* 4줄 이상 넘어가면 스크롤 생김, 바는 안생김 */}
          <p>{content}</p>
          {contentWriter && (
            <p>
              <span>from. {contentWriter}</span>
            </p>
          )}
        </Contents>
        <Title onClick={onClick}>
          <p className="title">
            <span>{title}</span> {titleHighlight}
          </p>
        </Title>
      </Background>
    </Wrapper>
  );
};
export default Slider;

const Wrapper = styled.div<{ team: 'YB' | 'OB' | null }>`
  width: 90%;
  margin: 0 5%;
  height: 180px;
  ${({ team }) =>
    team
      ? team === 'YB'
        ? css`
            background: url(${map1});
          `
        : css`
            background: url(${map2});
          `
      : css`
          background: rgba(0, 0, 0, 0.49);
        `};
  /* 지도 세팅 해야함 */
  border-radius: 16px;
`;

const Background = styled.div<{ team: 'YB' | 'OB' | null }>`
  padding-top: 22px;
  display: flex;
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
  margin: 0 6% 26px 6%;
  width: 88%;
  height: 66px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & p {
    font: ${({ theme }) => theme.typo.text_14_M};
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
    font: ${({ theme }) => theme.typo.text_14_M};
    text-align: center;
    letter-spacing: -0.408px;
    color: ${({ theme }) => theme.palette.point.lavenderDark};
  }
  & span {
    color: ${({ theme }) => theme.palette.point.lavender};
  }
`;
