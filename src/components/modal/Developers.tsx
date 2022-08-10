import styled from 'styled-components';
import { ReactComponent as Quit } from '../../assets/icons/modalQuit.svg';
export type DevelopersProps = {
  closeModal: () => void;
  content: string;
};

const Developers = ({ closeModal, content }: DevelopersProps) => {
  return (
    <Wrapper>
      <Quit onClick={closeModal} />
      <Head>
        <p>이렇게 남길까요?</p>
        <Content>{content}</Content>
      </Head>
    </Wrapper>
  );
};

export default Developers;

const Wrapper = styled.div`
  position: relative;
  z-index: 110;
  height: 100%;
  box-sizing: border-box;
  padding: 36px 36px 24px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > svg {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }
`;

const Head = styled.div`
  ${({ theme }) => theme.typo.text_18_B}
  color: ${({ theme }) => theme.palette.mono.black_00};

  padding-bottom: 12px;
  border-bottom: 1px solid #000;
`;

const Content = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 144px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(211, 211, 211, 0.8);
    border-radius: 1.5px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }

  white-space: pre-wrap;
  ${({ theme }) => theme.typo.text_12_M};
  line-height: 150%;
  color: ${({ theme }) => theme.palette.mono.black_36};
`;
