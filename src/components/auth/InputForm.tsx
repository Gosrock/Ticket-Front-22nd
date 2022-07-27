import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import useTimer from '../../hooks/useTimer';

interface InputFormProps extends HTMLAttributes<HTMLInputElement> {
  //value: string | number;
  //onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  page: 'send' | 'validate' | 'init';
}

const formContent = {
  send: {
    type: 'tel',
    placeholder: '휴대폰 번호 입력',
    limit: 11,
  },
  validate: {
    type: 'tel',
    placeholder: '인증번호 입력',
    limit: 4,
  },
  init: {
    type: 'string',
    placeholder: '이름 입력',
    limit: 5,
  },
};

const InputForm = ({ page }: InputFormProps) => {
  const [time, reset] = useTimer();

  return (
    <Wrapper>
      <input
        className="input-box"
        type={formContent[page].type}
        placeholder={formContent[page].placeholder}
      />
      <div className="input-indicator">
        {page === 'validate' && (
          <Timer>
            {Math.floor(time / 60)}:{('00' + Math.floor(time % 60)).slice(-2)}
          </Timer>
        )}
      </div>
      <div className="border-animate" />
      {page === 'validate' && (
        <Resend>
          문자가 오지 않았나요? &nbsp;
          <span
            onClick={() => {
              reset();
            }}
          >
            재전송
          </span>
        </Resend>
      )}
    </Wrapper>
  );
};

export default InputForm;

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.palette.mono.white};
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-template-rows: 48px auto;
  box-sizing: border-box;

  // 1차 프로젝트에서 가져온 코드.. 리팩토링 필요
  input::-ms-clear {
    display: none;
  }
  input {
    width: 100%;
    height: 100%;
    border: 0px;
    padding: 0px 0px 2px 0px;
    ${({ theme }) => theme.typo.placeholder_24_R}
    color: white;
    background-color: transparent;
  }
  input:focus {
    outline: none;
  }
  input:placeholder {
    color: #939393;
  }

  .border-animate {
    grid-column: span 3;
  }

  .input-box ~ .border-animate {
    margin: 0 auto;
    width: 0%;
    height: 2px;
    transition: 0.4s;
  }

  .input-box:focus ~ .border-animate {
    width: 100%;
    height: 2px;
    background-color: #bf94e4;
  }

  .input-indicator {
    margin: auto 0;
  }
`;

const Timer = styled.div`
  ${({ theme }) => theme.typo.text_16_R}
  color: ${({ theme }) => theme.palette.mono.white};
  text-align: right;
`;

const Resend = styled.p`
  margin-top: 10px;
  ${({ theme }) => theme.typo.text_14_R}
  color: ${({ theme }) => theme.palette.mono.font_sub};
  & > span {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.mono.white};
  }
  & > span:hover {
    text-decoration: underline;
  }
`;
