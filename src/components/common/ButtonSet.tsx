import { HTMLAttributes, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import SetMargin from './SetMargin';
import { darken } from 'polished';
import { throttle } from 'lodash';

interface ButtonSetProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  buttonDisabled?: boolean;
}

const ButtonSet = ({
  label = '다음으로',
  buttonDisabled = true,
  ...props
}: ButtonSetProps) => {
  const [height, setHeight] = useState<number>();
  const handleWidthResize = throttle(() => {
    setHeight(window.innerHeight);
  }, 100);
  useEffect(() => {
    console.log(height);
  }, [height]);
  useEffect(() => {
    window.addEventListener('resize', handleWidthResize);
    return () => {
      window.addEventListener('resize', handleWidthResize);
    };
  }, []);

  return (
    <Wrapper height={height}>
      <SetMargin>
        <button disabled={buttonDisabled} {...props}>
          {label}
        </button>
      </SetMargin>
    </Wrapper>
  );
};

export default ButtonSet;

const Wrapper = styled.div<{ height: number | undefined }>`
  width: 100%;
  height: 84px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ height }) =>
    height &&
    height < 400 &&
    css`
      display: none;
    `}

  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 0) 6.25%,
    rgba(18, 18, 18, 0.1) 22.4%,
    rgba(18, 18, 18, 0.5) 38.02%,
    rgba(18, 18, 18, 0.9) 62.5%,
    #121212 79.69%
  );

  button {
    background-color: ${({ theme }) => theme.palette.point.lavender};
    ${({ theme }) => theme.typo.text_18_B}
    width: 100%;
    height: 48px;
    z-index: 2;
    border-radius: 8px;
    ${({ theme }) => {
      const selected = theme.palette.point.lavender;
      return css`
        &:active {
          background: ${darken(0.05, selected)};
        }
      `;
    }}

    &:disabled {
      background-color: ${({ theme }) => theme.palette.mono.font_sub};
    }
  }
`;
