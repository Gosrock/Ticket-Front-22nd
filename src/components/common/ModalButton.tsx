import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ModalButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
}

const ModalButton = ({ label, onClick, ...props }: ModalButtonProps) => {
  return (
    <Wrapper onClick={onClick} {...props}>
      {label}
    </Wrapper>
  );
};

export default ModalButton;

const Wrapper = styled.button`
  margin: 0 auto;
  width: 164px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.mono.black_12};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.mono.white};
  ${({ theme }) => theme.typo.text_14_M}

  &:active {
    background-color: ${({ theme }) => theme.palette.mono.black_26};
  }
`;
