import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IBindState } from '../../hooks/useInput';
import AppBar from '../common/AppBar';
import ButtonSet from '../common/ButtonSet';
import SetMargin from '../common/SetMargin';
import InputForm from './InputForm';

const renderText = {
  send: {
    titleTop: '본인확인을 위해',
    titleBotton: '휴대폰 인증이 필요해요',
    descriptionTop: '하이픈( - ) 없이',
    descriptionBottom: '숫자로만 입력해주세요.',
  },
  validate: {
    titleTop: '인증번호는',
    titleBotton: '문자로 발송돼요',
    descriptionTop: '문자에 답장을 하게 되면',
    descriptionBottom: '번호가 노출 되니 주의해 주세요',
  },
  init: {
    titleTop: '입금자명으로 사용될 이름을',
    titleBotton: '입력해주세요',
    descriptionTop: '이름은 4자 이내로 입력해주세요',
    descriptionBottom: '',
  },
};

type TAuthTemplateProps = {
  page: 'send' | 'validate' | 'init';
  bind: IBindState<string>;
  handleClick: () => void;
  onResendButtonClick?: () => void;
};

const AuthTemplate = ({
  page,
  bind,
  handleClick,
  onResendButtonClick,
}: TAuthTemplateProps) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (
      page === 'send' &&
      bind.value.length === 11 &&
      !bind.value.match(/[^0-9]/gi)
    ) {
      setButtonDisabled(false);
    } else if (page === 'validate' && bind.value.length === 4) {
      setButtonDisabled(false);
    } else if (
      page === 'init' &&
      bind.value.length > 0 &&
      bind.value.length < 5
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [bind]);

  return (
    <>
      <AppBar label={'뒤로 가기'} />
      <SetMargin>
        <Title>
          <p>{renderText[page].titleTop}</p>
          <p>{renderText[page].titleBotton}</p>
        </Title>
        <Description>
          <p>{renderText[page].descriptionTop}</p>
          <p>{renderText[page].descriptionBottom}</p>
        </Description>
        <InputForm
          page={page}
          bind={bind}
          onResendButtonClick={
            page === 'validate' ? onResendButtonClick : undefined
          }
        />
      </SetMargin>
      <ButtonSet onClick={handleClick} buttonDisabled={buttonDisabled} />
    </>
  );
};

export default AuthTemplate;

const Title = styled.div`
  ${({ theme }) => theme.typo.title_24_B}
  color: ${({ theme }) => theme.palette.mono.font_main};
  & > p:first-child {
    margin-bottom: 8px;
  }
`;
const Description = styled.div`
  ${({ theme }) => theme.typo.text_16_R}
  color: ${({ theme }) => theme.palette.mono.font_sub};
  & > p:first-child {
    margin-bottom: 6px;
  }
  margin-top: 32px;
  margin-bottom: 100px;
`;
