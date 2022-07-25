import styled, { css } from 'styled-components';

interface ISliderProps {
  title: string;
  titleHighlight: string;
  content: string;

  imgsrc: string | null;
}

const Slider = ({ title, titleHighlight, content, imgsrc }: ISliderProps) => {
  return (
    <Wrapper src={imgsrc}>
      <Contents>
        {content.split('\n').map((el: string) => {
          return <p>{el}</p>;
        })}
      </Contents>
      {/* <Title>
        <p>
          {title} <span>{titleHighlight}</span>
        </p>
      </Title> */}
    </Wrapper>
  );
};
export default Slider;

const Wrapper = styled.div<{ src: string | null }>`
  width: 366px;
  height: 180px;
  padding: 24px 24px 0px 24px;

  background: ${({ src }) =>
    src
      ? { src }
      : css`
  rgba(0, 0, 0, 0.49);
    `};
  backdrop-filter: blur(33px);
  border-radius: 16px;
`;

const Contents = styled.div`
  & p {
    margin-bottom: 4px;
  }
  & :last-child {
    margin: 0;
  }
`;

const Title = styled.div`
  position: relative;
  top: 110px;
  left: 133px;
  padding: 5px 10px;
  width: 101px;
  height: 24px;

  background: ${({ theme }) => theme.palette.mono.white};
  border-radius: 12px;

  /* 응원 톡 남기기 */

  & p {
    width: 81px;
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
