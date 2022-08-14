import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import TalkInput from '../../components/mypage/talk/TalkInput';
import TalkList from '../../components/mypage/talk/TalkList';
import useGetTalks from '../../hooks/queries/useGetTalks';
import useGetTalksCount from '../../hooks/queries/useGetTalksCount';

const Talk = () => {
  const { data, isFetchingNextPage, Observation } = useGetTalks();
  const { status: countStatus, count } = useGetTalksCount();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const talkListRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <AppBar label={'마이페이지'} />
      <SetMargin>
        <h1>
          <span>고스락</span> 응원 톡{' '}
          <span>({countStatus === 'success' ? count : '...'})</span>
        </h1>
        <TalkInput
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          talkListRef={talkListRef}
        />
        <TalkListWrapper isOpen={isOpen} ref={talkListRef}>
          {data?.pages.map((talkList) => (
            <TalkList talkList={talkList.talkList} key={talkList.lastId} />
          ))}
          <Observation />
        </TalkListWrapper>
      </SetMargin>
    </Wrapper>
  );
};

export default Talk;

const Wrapper = styled.div`
  h1 {
    ${({ theme }) => theme.typo.text_18_B}
    & > span:first-of-type {
      color: ${({ theme }) => theme.palette.point.lavender};
    }
    & > span:last-of-type {
      color: ${({ theme }) => theme.palette.mono.font_sub};
    }
    margin-bottom: 24px;
  }
`;

const TalkListWrapper = styled.div<{ isOpen: boolean }>`
  margin-top: 24px;
  transition: all 0.1s ease;
  ${({ isOpen }) =>
    isOpen
      ? css`
          height: calc(var(--vh, 1vh) * 100 - 291px);
        `
      : css`
          height: calc(var(--vh, 1vh) * 100 - 186px);
        `} //291, 186
  overflow-y: auto;
  scroll-behavior: smooth;
`;
