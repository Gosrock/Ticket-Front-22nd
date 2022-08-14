import gosrock from '../../assets/gosrock.png';
import { ReactComponent as Insta } from '../../assets/icons/instagram.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import styled from 'styled-components';
//'https://github.com/Gosrock'
//'https://www.instagram.com/gosrock_archive/'
// 'https://www.youtube.com/channel/UCBjYErlHCG0vfcdDmaeOIxQ'
const Footer = () => {
  return (
    <Wrapper>
      {/* 배포 완료시 수정해야함 */}
      <img src={gosrock} />

      <SecondRow>
        <a
          href="https://github.com/Gosrock"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github />
        </a>
        <a
          href="https://www.instagram.com/gosrock_archive/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Insta />
        </a>
        <a
          href="https://www.youtube.com/channel/UCBjYErlHCG0vfcdDmaeOIxQ"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Youtube />
        </a>
      </SecondRow>
      <p>© GOSROCK. 2022 All rights reserved</p>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.palette.mono.black_26};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 44px;
    margin-bottom: 20px;
  }
  & p {
    ${({ theme }) => theme.typo.tag_10_B}
    font-weight: 500;
    color: ${({ theme }) => theme.palette.mono.font_sub};
  }
`;

const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-bottom: 24px;
  & > a {
    z-index: 11;
  }
`;
