import styled from 'styled-components';
import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import TalkInput from '../../components/mypage/talk/TalkInput';
import TalkList from '../../components/mypage/talk/TalkList';
import useGetTalks from '../../hooks/queries/useGetTalks';

const Talk = () => {
  const { data, status, isFetchingNextPage, Observation } = useGetTalks();

  return (
    <Wrapper>
      <AppBar label={'마이페이지'} />
      <SetMargin>
        <h1>
          <span>고스락</span> 응원 톡{' '}
          {/*  <span>({status === 'success' ? '' : '...'})</span> */}
        </h1>
        <TalkInput onSendButtonClick={() => {}} />
        <TalkListWrapper>
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
    /* & > span:last-of-type {
      color: ${({ theme }) => theme.palette.mono.font_sub};
    } */
    margin-bottom: 24px;
  }
`;

const TalkListWrapper = styled.div`
  margin-top: 24px;
`;
