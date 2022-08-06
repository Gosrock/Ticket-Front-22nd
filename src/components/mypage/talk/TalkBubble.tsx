import styled, { css } from 'styled-components';
import getTimeForToday from '../../../utils/getTimeForToday';

type TalkBubbleProps = {
  nickName: string;
  createdAt: string;
  content: string;
  iComment: boolean;
};

const TalkBubble = ({
  nickName,
  createdAt,
  content,
  iComment,
}: TalkBubbleProps) => {
  return (
    <Wrapper>
      <Bubble mine={iComment}>
        <Head>
          <p>from. {nickName}</p>
          <p>{getTimeForToday(createdAt)}</p>
        </Head>
        <p>{content}</p>
      </Bubble>
    </Wrapper>
  );
};

export default TalkBubble;

const Wrapper = styled.div`
  width: 100%;
`;

const Bubble = styled.div<{ mine: boolean }>`
  display: inline-block;
  padding: 12px 16px;
  background-color: ${({ theme, mine }) =>
    mine ? theme.palette.mono.font_main : theme.palette.mono.white};

  & > p {
    white-space: pre-wrap;
    ${({ theme }) => theme.typo.text_12_M};
    line-height: 150%;
    color: ${({ theme }) => theme.palette.mono.black_36};
  }

  ${({ mine }) =>
    mine
      ? css`
          border-radius: 16px 4px 16px 16px;
          margin-left: 32px;
        `
      : css`
          border-radius: 4px 16px 16px 16px;
          margin-right: 32px;
        `}
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 10px;
  & > p:first-child {
    ${({ theme }) => theme.typo.text_12_B};
    color: ${({ theme }) => theme.palette.point.red};
  }
  & > p:last-child {
    ${({ theme }) => theme.typo.text_12_M};
    color: ${({ theme }) => theme.palette.mono.font_sub};
  }
`;
