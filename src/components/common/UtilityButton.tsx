import styled from 'styled-components';
import { ReactComponent as KakaoLogo } from '../../assets/icons/kakaoLogo.svg';
import { ReactComponent as Share } from '../../assets/icons/share.svg';

interface IUtilityButtonProps {
  type: 'share' | 'kakao';
}

const UtilityButton = ({ type }: IUtilityButtonProps) => {
  return (
    <Wrapper type={type}>
      {type === 'share' ? (
        <Content type={type}>
          <p>예매한 티켓 공유</p>
          <Share />
        </Content>
      ) : (
        <Content type={type}>
          <p>고스락 채널 문의</p>
          <KakaoLogo style={{ marginTop: '5px' }} />
        </Content>
      )}
    </Wrapper>
  );
};
export default UtilityButton;

const Wrapper = styled.div<{
  type: 'share' | 'kakao';
}>`
  width: 162px;
  height: 50px;
  padding: 13px 17px;

  background: ${({ type, theme }) =>
    type === 'share'
      ? theme.palette.mono.black_12
      : theme.palette.point.yellow_kakao};
  border-radius: 16px;
`;

const Content = styled.div<{
  type: 'share' | 'kakao';
}>`
  width: 127.63px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* 고스락 채널 문의 */
  & p {
    width: 97px;
    height: 14px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: ${({ type, theme }) =>
      type === 'share'
        ? theme.palette.mono.white
        : theme.palette.mono.black_00};
  }
`;
