import styled from 'styled-components';
import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import TalkInput from '../../components/mypage/talk/TalkInput';
import useGetTalks from '../../hooks/queries/useGetTalks';

const Talk = () => {
  const { status, talkList, meta } = useGetTalks();
  return (
    <Wrapper>
      <AppBar label={'마이페이지'} />
      <SetMargin>
        <h1>
          <span>고스락</span> 응원 톡{' '}
          <span>({status === 'success' ? talkList?.length : '...'})</span>
        </h1>
        <TalkInput onSendButtonClick={() => {}} />
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
