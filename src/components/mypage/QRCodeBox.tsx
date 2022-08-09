import styled, { css, ThemeConsumer } from 'styled-components';
import QRCode from 'qrcode.react';
import { ITicket } from '../../apis/type/ticket';
type QRCodeProps = {
  uuid: string;
  status: ITicket['status'];
};

const QRCodeBox = ({ uuid, status }: QRCodeProps) => {
  console.log(status);
  return (
    <Wrapper>
      <div>
        <QRCode
          value={uuid}
          size={200}
          bgColor={'#fff'}
          fgColor={'#000'}
          includeMargin={false}
          renderAs={'svg'}
        />
      </div>
      <StatusGradient status={status} />
    </Wrapper>
  );
};

export default QRCodeBox;
const Wrapper = styled.div`
  position: relative;
  & > div:first-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 10;
    width: 216px;
    height: 216px;
    background-color: ${({ theme }) => theme.palette.mono.white};
    border-radius: 6px;

    & > svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
`;

const StatusGradient = styled.div<{ status: ITicket['status'] }>`
  height: 230px;
  width: 230px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  &:before {
    content: '';
    height: 150%;
    width: 150%;
    position: absolute;
    left: -25%;
    top: -25%;
    animation: spin 2s infinite linear;

    ${({ status }) =>
      status === '입금확인' &&
      css`
        background: conic-gradient(#66dc80, #92f5ce);
      `}
    ${({ status }) =>
      status === '입장완료' &&
      css`
        background: conic-gradient(#f7df8a, #fbba6e);
      `}
    ${({ status }) =>
      status === '확인대기' &&
      css`
        background: conic-gradient(#d0d0d0, #b6b7b8);
      `}
      ${({ status }) =>
      status === '기한만료' &&
      css`
        background: conic-gradient(#ffb7be, #ff7785);
      `}
  }
  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`;
