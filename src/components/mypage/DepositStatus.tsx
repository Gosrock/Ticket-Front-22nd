import styled, { css } from 'styled-components';

export interface IDepositStatusProps {
  status: 'pending' | 'paid' | 'entered' | 'expired';
  style?: React.CSSProperties;
}

const DepositStatus = ({ status, style }: IDepositStatusProps) => {
  const label = ['확인대기', '입금확인', '입장완료', '기한만료'];
  const inputList = ['pending', 'paid', 'entered', 'expired'];
  const labelIndex = inputList.indexOf(status);
  return (
    <Wrapper status={status} style={style}>
      <p>{label[labelIndex]}</p>
    </Wrapper>
  );
};
export default DepositStatus;

const Wrapper = styled.div<{
  status: 'pending' | 'paid' | 'entered' | 'expired';
}>`
  padding: 3px 8px;
  width: 46px;
  height: 18px;
  border-radius: 12px;
  text-align: center;
  box-sizing: border-box;

  ${({ status }) =>
    status === 'pending' &&
    css`
      background: ${({ theme }) => theme.palette.mono.font_sub};
    `}
  ${({ status }) =>
    status === 'paid' &&
    css`
      background: ${({ theme }) => theme.palette.point.lavender}; ;
    `}
  ${({ status }) =>
    status === 'entered' &&
    css`
      background: ${({ theme }) => theme.palette.point.mint}; ;
    `}
  ${({ status }) =>
    status === 'expired' &&
    css`
      background: ${({ theme }) => theme.palette.point.red}; ;
    `}

  /* 확인대기 */
  & p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 8px;

    /* line-height 12px로 하면 글씨가 위로 치우침 */
    margin-top: 1px;
    line-height: 11px;
    color: #ffffff;
  }
`;
