import styled from 'styled-components';
import { ReactComponent as Quit } from '../../assets/icons/modalQuit.svg';
export type DevelopersProps = {
  closeModal: () => void;
};

const list = [
  ['・ 이찬진', '기획・백엔드 , 어드민 팀장'],
  ['・ 한규진', '기획・UI/UX・어드민 팀장'],
  ['・ 김민준', '백엔드'],
  ['・ 김원진', '백엔드'],
  ['・ 노경민', '백엔드'],
  ['・ 채승희', '백엔드'],
  ['・ 서예진', '프론트앤드'],
  ['・ 정상훈', '프론트앤드'],
  ['・ 김주안', '프론트앤드'],
  ['・ 강나연', '어드민'],
  ['・ 봉세환', '어드민'],
  ['・ 이한비', '어드민'],
];

const Developers = ({ closeModal }: DevelopersProps) => {
  return (
    <Wrapper>
      <Quit onClick={closeModal} />
      <Head>
        <p>고스락 티켓 프로젝트</p>
      </Head>
      <Content>
        <StyledUl>
          {list.map((v) => (
            <li>
              <span>{v[0]}</span>
              {'  '}
              {v[1]}
            </li>
          ))}
        </StyledUl>
      </Content>
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
`;

const Content = styled.div`
  padding: 12px;
  margin-top: 36px;
  width: 100%;
  height: 246px;
  background-color: #eaeaec;
  border-radius: 12px;
`;

const StyledUl = styled.ul`
  height: 222px;

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
  line-height: 250%;
  color: ${({ theme }) => theme.palette.mono.black_12};

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.palette.point.red};
  }
`;
