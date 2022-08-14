import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useScroll from '../../hooks/useScroll';

const FixedButton = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (scrollY > 400 && scrollY < 7200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scrollY]);
  return (
    <Wrapper visible={visible}>
      <button>마이페이지</button>
      <button>예매하러 가기</button>
    </Wrapper>
  );
};

export default FixedButton;
const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  right: 80px;
  bottom: 64px;

  display: ${({ visible }) => (visible ? 'fixed' : 'none')};
  button {
    padding: 16px 24px;
    background-color: ${({ theme }) => theme.palette.mono.black_12};
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.palette.mono.white};
    ${({ theme }) => theme.typo.text_16_R}
    font-weight: 500;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    &:active {
      background-color: ${({ theme }) => theme.palette.mono.black_26};
    }
  }
  & > button:first-child {
    margin-right: 12px;
    background-color: ${({ theme }) => theme.palette.mono.black_36};
  }

  ${({ visible }) =>
    visible &&
    css`
      animation: 0.5s forwards LandingfadeIn;
    `}
  ${({ theme }) => theme.animate.LandingfadeIn}
`;
