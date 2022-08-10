import styled, { css } from 'styled-components';
import { ReactComponent as ChatHeartRed } from '../../../assets/icons/chatHeartRed.svg';
import { ReactComponent as Marker } from '../../../assets/icons/marker.svg';
import { ReactComponent as Footprint } from '../../../assets/icons/footprint.svg';
import { ReactComponent as KakaoChannel } from '../../../assets/icons/kakaoChannel.svg';

interface IBannerProps {
  type: 'talk' | 'location' | 'developers' | 'kakao';
  title: string;
  subtitle: string;
  onClick: () => void;
}

const Banner = ({ type, title, subtitle, onClick }: IBannerProps) => {
  return (
    <Wrapper type={type} onClick={onClick}>
      {type === 'talk' && <ChatHeartRed />}
      {type === 'location' && <Marker />}
      {type === 'developers' && <Footprint />}
      {type === 'kakao' && <KakaoChannel />}
      <div>
        <p>{subtitle}</p>
        <p>
          <span>{title}</span>
        </p>
      </div>
    </Wrapper>
  );
};
export default Banner;

const Wrapper = styled.div<{
  type: 'talk' | 'location' | 'developers' | 'kakao';
}>`
  width: calc(100% - 36px);
  max-width: 360px;
  height: calc((100vw - 36px) / 2);
  max-height: 180px;
  min-height: 150px;
  margin: 0px 18px;
  padding: 28px 18px 37px 28px;
  background: ${({ theme }) => theme.palette.mono.white};
  box-sizing: border-box;
  border-radius: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;

    & > p {
      ${({ theme }) => theme.typo.text_18_B}
      color: ${({ theme }) => theme.palette.mono.black_36};
    }

    & :first-child {
      margin: 0 1px 8px 0;
    }

    & span {
      ${({ theme }) => theme.typo.title_28_B}
      ${({ type }) =>
        type === 'talk'
          ? css`
              color: ${({ theme }) => theme.palette.point.green_starbucks};
            `
          : css`
              color: ${({ theme }) => theme.palette.mono.black_12};
            `}
    }
  }
`;
