import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as KakaoLogo } from '../../assets/icons/kakao.svg';
import { ReactComponent as Share } from '../../assets/icons/share.svg';

interface IUtilityButtonProps extends HTMLAttributes<HTMLInputElement> {
  type: 'share' | 'kakao';
}

const UtilityButton = ({ type, ...props }: IUtilityButtonProps) => {
  return (
    <Wrapper type={type} {...props}>
      <p>{type === 'share' ? '예매 티켓 공유' : '고스락 채널'}</p>
      {type === 'share' ? <Share /> : <KakaoLogo />}
    </Wrapper>
  );
};
export default UtilityButton;

const Wrapper = styled.div<{
  type: 'share' | 'kakao';
}>`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.text_14_M}
  ${({ type, theme }) =>
    type === 'share'
      ? css`
          background-color: ${theme.palette.mono.black_12};
          color: ${theme.palette.mono.white};
        `
      : css`
          background-color: ${theme.palette.point.yellow_kakao};
          color: ${theme.palette.mono.black_00};
        `}
  border-radius: 16px;

  & > p {
    position: absolute;
    left: 10%;
  }
  & > svg {
    position: absolute;
    right: 16px;
  }
`;
