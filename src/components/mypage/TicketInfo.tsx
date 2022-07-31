import styled, { css } from 'styled-components';
import DepositStatus, { IDepositStatusProps } from './DepositStatus';
import { ReactComponent as QRcode } from '../../assets/icons/qrcode.svg';
import { ReactComponent as DashedLine } from '../../assets/icons/dashedLine.svg';

interface ITicketInfoProps extends IDepositStatusProps {
  createdat: string;
  id: number;
  onClick?: () => void;
}

const TicketInfo = ({ status, createdat, id, onClick }: ITicketInfoProps) => {
  return (
    <Wrapper>
      <Top>
        <DepositStatus status={status} />
        <Info>
          <p>
            예매일시 : <span>{createdat}</span>
          </p>
          <p>
            티켓번호 : <span>#{id}</span>
          </p>
        </Info>
      </Top>
      {(status === '입금확인' || status === '입장완료') && (
        <Bottom>
          <DashedLine />
          {/* dashedLine 크기가 이상하게 표시되어 dashedLine과 showQR 사이 패딩을 10.5에서 7.5로 조정함 */}
          <ShowQR onClick={onClick}>
            <p>QR코드 보기</p>
            <QRcode />
          </ShowQR>
        </Bottom>
      )}
    </Wrapper>
  );
};
export default TicketInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: 120px;
  background: #fafafa;
  border-radius: 16px;
  box-sizing: border-box;
  padding-top: 8px;
`;

const Top = styled.div`
  margin: 0 8px 0px 8px;
  width: calc(100% - 16px);
  height: 52px;
`;

const Info = styled.div`
  width: 100%;
  height: 24px;
  margin-top: 8px;

  ${({ theme }) => theme.typo.tag_10_B};
  color: ${({ theme }) => theme.palette.mono.black_12};
  & p:first-child {
    margin-bottom: 4px;
  }

  & span {
    color: ${({ theme }) => theme.palette.mono.font_sub};
  }
`;

const Bottom = styled.div`
  width: 100%;
`;

const ShowQR = styled.div`
  margin: 7.5px 12px 12px 12px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  & p {
    width: 63px;
    height: 12px;
    text-align: center;

    ${({ theme }) => theme.typo.text_12_B_lessSpacing};
    margin: 0px 8px 0px 0px;

    color: ${({ theme }) => theme.palette.mono.black_00};
  }
`;
