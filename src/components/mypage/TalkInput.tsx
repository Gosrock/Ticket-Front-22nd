import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as ChevronDown } from '../../assets/icons/chevronDown.svg';
import { ReactComponent as Send } from '../../assets/icons/send.svg';

export interface ITalkInputProps {
  sendMessage: (InputMessage: string) => void;
}

const TalkInput = ({ sendMessage }: ITalkInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  return (
    <Wrapper>
      <Title isOpen={isOpen}>
        <p>펼쳐서 응원 톡을 남겨주세요</p>
        {value.length === 0 ? (
          <div onClick={() => setIsOpen((prev) => !prev)}>
            <p>펼치기</p>
            <ChevronDown />
          </div>
        ) : (
          <div onClick={() => sendMessage(value)}>
            <p>전송</p>
            <Send />
          </div>
        )}
      </Title>
      {isOpen && (
        <InputWindow>
          <textarea
            placeholder="익명으로 응원을 남기고 싶다면, 맨 앞에 ‘#별명’을 붙여주세요.&#10;예시 : #우장산불주먹 고스락 화이팅!"
            ref={textareaRef}
            onChange={textAreaChange}
            autoFocus
          />
        </InputWindow>
      )}
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
  ${({ isOpen }) =>
    isOpen === true
      ? css`
          border-radius: 8px 8px 0px 0px;
        `
      : css`
          border-radius: 8px;
        `}
  padding: 0px 15px 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    ${({ theme }) => theme.typo.text_14_M};
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
      margin-right: 6px;
    }
  }
`;

const InputWindow = styled.div`
  width: 100%;
  min-height: 105px;
  padding: 13px 16px;
  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 0px 0px 8px 8px;

  & > textarea {
    background: none;
    padding: 0;
    border: 0;
    width: 100%;
    min-height: 79px;
    resize: none;
    ${({ theme }) => theme.typo.text_12_M};
    line-height: 1.5rem;
    color: ${({ theme }) => theme.palette.mono.font_sub};
    outline-style: none;
  }
`;