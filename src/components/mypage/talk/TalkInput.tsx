import { useMutation, useQueryClient } from 'react-query';
import styled, { css } from 'styled-components';
import UsersApi from '../../../apis/UsersApi';
import { ReactComponent as ChevronDown } from '../../../assets/icons/chevronDown.svg';
import { ReactComponent as ChevronUp } from '../../../assets/icons/chevronUp.svg';
import { ReactComponent as Send } from '../../../assets/icons/send.svg';
import useGetUserInfo from '../../../hooks/queries/useGetUserInfo';
import useInput from '../../../hooks/useInput';
import useModal from '../../../hooks/useModal';

export interface ITalkInputProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  talkListRef: React.RefObject<HTMLDivElement>;
}

const TalkInput = ({ isOpen, setIsOpen, talkListRef }: ITalkInputProps) => {
  const [value, bind, reset] = useInput<string>('');
  const { status, data } = useGetUserInfo();
  const { openModal, closeModal } = useModal();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(UsersApi.sendTalk, {
    onSuccess: () => {
      queryClient.invalidateQueries('talks');
      queryClient.invalidateQueries('talksCount');
      talkListRef.current!.scrollTo(0, 0);
    },
  });

  const setRequestData = (value: string) => {
    const [splited] = value.trim().split(/\r\n|\r|\n|\s/);
    if (splited[0] === '#') {
      const content = value.trim().replace(splited, '').trim();
      const name = splited.replace('#', '').trim();
      return { nickName: name.substring(0, 10), content: content };
    } else {
      return { nickName: data!.data.name, content: value.trim() };
    }
  };
  const onSendButtonClick = async (value: string) => {
    try {
      const { nickName, content } = setRequestData(value);
      if (content.length > 0) {
        openModal({
          modalType: 'CheckBeforeSend',
          modalProps: {
            onClick: () => {
              mutate({ nickName, content });
              closeModal();

              reset();
            },
            closeModal,
            content,
            nickName,
          },
        });
      } else {
        //TODO: 에러처리 토스트 or 모달
        openModal({
          modalType: 'Notice',
          modalProps: {
            onClick: () => {
              closeModal();
            },
            closeModal,
            type: '에러처리',
            errorMessage: '내용을 함께 입력해주세요',
          },
        });
      }
    } catch (err) {
      reset();
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Title isOpen={isOpen}>
        <p>펼쳐서 응원 톡을 남겨주세요</p>
        {value.length === 0 ? (
          <div onClick={() => setIsOpen((prev) => !prev)}>
            <p>{isOpen ? '' : '펼치기'}</p>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
        ) : (
          <div onClick={() => onSendButtonClick(value)}>
            <p>전송</p>
            <Send />
          </div>
        )}
      </Title>
      <InputWindow isOpen={isOpen}>
        {isOpen && (
          <textarea
            placeholder="맨 앞에 ‘#별명’을 붙이면 익명으로 응원을 남길 수 있어요.&#10;별명은 최대 10자, 내용은 최대 150자까지 가능해요."
            value={value}
            onChange={bind.onChange}
            autoFocus
          />
        )}
      </InputWindow>
    </Wrapper>
  );
};
export default TalkInput;

const Wrapper = styled.div`
  width: 100%;
  min-height: 40px;
`;

const Title = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.palette.point.lavenderDark};
  transition: all 0.1s ease;
  ${({ isOpen }) =>
    isOpen === true
      ? css`
          border-radius: 8px 8px 0px 0px;
        `
      : css`
          border-radius: 8px;
        `}
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    ${({ theme }) => theme.typo.text_14_M};
    margin-bottom: 3px;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
      cursor: pointer;
    }
  }
  svg {
    cursor: pointer;
  }
`;

const InputWindow = styled.div<{ isOpen: boolean }>`
  width: 100%;
  padding: 0px 12px;
  ${({ isOpen }) =>
    isOpen
      ? css`
          height: 105px;
          padding: 12px;
          opacity: 100;
        `
      : css`
          height: 0px;
          opacity: 0;
        `}
  transition: all 0.1s ease;

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 0px 0px 8px 8px;

  & > textarea {
    background: none;
    padding: 0;
    border: 0;
    width: 100%;
    height: 73px;
    overflow-y: auto;
    resize: none;
    ${({ theme }) => theme.typo.text_12_M};
    line-height: 1.5rem;
    color: ${({ theme }) => theme.palette.mono.white};
    outline-style: none;

    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(211, 211, 211, 0.5);
      border-radius: 1.5px;
    }
    &::-webkit-scrollbar-track {
      background-color: none;
    }
  }

  & > svg {
    cursor: pointer;
  }
`;
