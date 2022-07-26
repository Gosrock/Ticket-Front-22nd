import styled, { css } from 'styled-components';
import map1 from '../../assets/maps/map1.png';
import map2 from '../../assets/maps/map2.png';

interface ISliderProps {
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
  // 토글은 swiper로 나중에 추가할 예정
  return (
    <Wrapper team={team}>
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
    </Wrapper>
  );
};
export default Slider;

const Wrapper = styled.div<{ team: 'YB' | 'OB' | null }>`
  width: 366px;
  height: 180px;
  padding-top: 22px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
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

const Contents = styled.div`
  margin: 0 22px 26px 22px;
  width: 322px;
  height: 66px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & p {
    line-height: 17px;
    font-size: 14px;
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
  & p {
    height: 14px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.408px;
    color: ${({ theme }) => theme.palette.point.lavenderDark};
  }
  & span {
    color: ${({ theme }) => theme.palette.point.lavender};
  }
`;
