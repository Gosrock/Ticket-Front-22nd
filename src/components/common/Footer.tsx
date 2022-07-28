import { ReactComponent as Gosrock } from '../../assets/icons/gosrock.svg';
import { ReactComponent as Insta } from '../../assets/icons/instagram.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      {/* 배포 완료시 수정해야함 */}
      <a href="https://github.com/Gosrock" target="_blank">
        <Gosrock />
      </a>

      <SecondRow>
        <a href="https://github.com/Gosrock" target="_blank">
          <Github />
        </a>
        <a href="https://www.instagram.com/gosrock_archive/" target="_blank">
          <Insta />
        </a>
        <a
          href="https://www.youtube.com/channel/UCBjYErlHCG0vfcdDmaeOIxQ"
          target="_blank"
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
  height: 200px;
  background-color: ${({ theme }) => theme.palette.mono.black_footer};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    color: ${({ theme }) => theme.palette.mono.white};
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    text-align: center;
  }
`;

const SecondRow = styled.div`
  width: 30%;
  max-width: 150px;
  margin: 16px 0px 18px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
