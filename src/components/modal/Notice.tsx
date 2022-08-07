import styled from 'styled-components';
import { ReactComponent as AlreadyEntered } from '../../assets/icons/undraw_compose_music_re_wpiw.svg';
import { ReactComponent as WrongDate } from '../../assets/icons/undraw_access_denied_re_awnf.svg';
import ModalButton from '../common/ModalButton';
export type NoticeProps = {
  onClick: () => void;
  type: '입장완료' | '공연날짜';
};

const noticeContent = {
  입장완료: {
    illust: <AlreadyEntered />,
    text: <p>이미 입장 완료된 티켓입니다</p>,
  },
  공연날짜: {
    illust: <WrongDate />,
    text: <p>공연 날짜가 일치하지 않습니다</p>,
  },
};

const Notice = ({ onClick, type }: NoticeProps) => {
  return (
    <Wrapper>
      <Head>
        <div>{noticeContent[type].illust}</div>
        {noticeContent[type].text}
      </Head>
      <ModalButton label="확인했어요" onClick={onClick} />
    </Wrapper>
  );
};

export default Notice;

const Wrapper = styled.div`
  padding: 52px 36px 24px 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Head = styled.div`
  & > div:first-child {
    height: 153px;
  }
  & > p {
    margin-top: 28px;
    ${({ theme }) => theme.typo.text_18_B}
    color: ${({ theme }) => theme.palette.mono.black_00};
  }
`;
