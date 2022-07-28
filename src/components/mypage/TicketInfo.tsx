import styled, { css } from 'styled-components';
import DepositStatus, { IDepositStatusProps } from './DepositStatus';
import { ReactComponent as QRcode } from '../../assets/icons/qrcode.svg';

interface ITicketInfoProps extends IDepositStatusProps {
  createat: string;
  ticketNum: number;
  onClick?: () => void;
  children?: JSX.Element;
}

const TicketInfo = ({
  status,
  createat,
  ticketNum,
  onClick,
  children,
}: ITicketInfoProps) => {
  return (
    <Wrapper>
      <DepositStatus status={status} style={{ marginLeft: '8px' }} />
      <Info>
        <p>
          예매일시 : <span>{createat}</span>
        </p>
        <p>
          티켓번호 : <span>#{ticketNum}</span>
        </p>
      </Info>
      {(status === '입금확인' || status === '입장완료') && (
        <>
          <Line />
          <ShowQR onClick={onClick}>
            <p>QR코드 보기</p>
            <QRcode />
          </ShowQR>
        </>
      )}
      {children}
    </Wrapper>
  );
};
export default TicketInfo;

const Wrapper = styled.div`
  width: 150px;
  height: 120px;
  background: #fafafa;
  border-radius: 16px;
  box-sizing: border-box;
  padding-top: 8px;
  margin-right: 16px;
`;

const Info = styled.div`
  width: 90px;
  height: 24px;
  margin: 10px 0px 0px 9px;

  font: ${({ theme }) => theme.typo.tag_8_b};
  line-height: 12px;
  color: ${({ theme }) => theme.palette.mono.black_12};

  & span {
    color: ${({ theme }) => theme.palette.mono.font_sub};
  }
`;

const Line = styled.hr`
  margin: 0;
  margin-top: 19.5px;

  border: none;
  border-top: 1px dashed ${({ theme }) => theme.palette.mono.white_e6};
`;

const ShowQR = styled.div`
  margin: 10.5px 12px 12px 49px;
  width: 88px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & p {
    width: 63px;
    height: 12px;
    text-align: center;

    font: ${({ theme }) => theme.typo.text_12_B_lessSpacing};
    /* margin-top없으면 글씨가 위로 치우침 */
    margin: 1px 8px 0px 0px;

    color: ${({ theme }) => theme.palette.mono.black_00};
  }
`;
