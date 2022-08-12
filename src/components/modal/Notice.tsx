import styled from 'styled-components';
import { ReactComponent as AlreadyEntered } from '../../assets/illusts/undraw_compose_music_re_wpiw.svg';
import { ReactComponent as WrongDate } from '../../assets/illusts/undraw_access_denied_re_awnf.svg';
import { ReactComponent as NewMessage } from '../../assets/illusts/undraw_new_message_re_fp03.svg';
import { ReactComponent as Notify } from '../../assets/illusts/undraw_notify_re_65on.svg';
import ModalButton from '../common/ModalButton';
export type NoticeProps = {
  onClick: () => void;
  type: '입장완료' | '공연날짜' | '에러처리';
  errorMessage?: string;
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
  재전송: {
    illust: <NewMessage />,
    text: <p>인증번호가 재전송되었습니다</p>,
  },
  에러처리: {
    illust: <Notify />,
    text: '',
  },
};

const Notice = ({ onClick, type, errorMessage }: NoticeProps) => {
  console.log(errorMessage);
  return (
    <Wrapper>
      <Head>
        <div>{noticeContent[type].illust}</div>
        {errorMessage ? <p>{errorMessage}</p> : noticeContent[type].text}
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
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:first-child {
    height: 153px;
  }
  & > p {
    margin-top: 28px;
    ${({ theme }) => theme.typo.text_18_B}
    font-size: 16px;
    color: ${({ theme }) => theme.palette.mono.black_00};
  }
`;
