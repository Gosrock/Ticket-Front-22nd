import styled from 'styled-components';
import { ITalk } from '../../../apis/type/users';
import TalkBubble from './TalkBubble';

const TalkList = ({ talkList }: { talkList: ITalk[] }) => {
  return (
    <Wrapper>
      {talkList.map((talk) => (
        <TalkBubble
          nickName={talk.nickName}
          content={talk.content}
          createdAt={talk.createdAt}
          iComment={talk.iComment}
          key={talk.id}
        />
      ))}
    </Wrapper>
  );
};

export default TalkList;

const Wrapper = styled.div`
  & > div {
    margin-bottom: 14px;
  }
`;
