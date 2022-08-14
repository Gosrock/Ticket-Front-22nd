import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { toastState } from '../../stores/toast';

function Toast() {
  const { content, isClosing } = useRecoilValue(toastState);

  return <Wrapper isClosing={isClosing}>{content}</Wrapper>;
}

export default Toast;

export const Wrapper = styled.div<{ isClosing: boolean }>`
  position: fixed;
  bottom: 50px;
  left: 50%;
  padding: 15px 20px;
  transform: translate(-50%, 10px);
  border-radius: 30px;
  overflow: hidden;
  font-size: 0.8rem;
  opacity: 0;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  z-index: 10;

  ${({ isClosing }) =>
    isClosing
      ? css`
          animation: 0.5s forwards fadeOut;
        `
      : css`
          animation: 0.5s forwards fadeIn;
        `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    to {
      opacity: 0;
      transform: translate(-50%, 0);
    }
  }
`;
