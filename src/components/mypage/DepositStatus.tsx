import styled, { css } from 'styled-components';

export interface IDepositStatusProps {
  status: string;
  // 이거 묵데이터로 테스트했을 때, 오류뜸
  // status: '입장완료' | '입금확인' | '확인대기' | '기한만료';
  style?: React.CSSProperties;
}

const DepositStatus = ({ status, style }: IDepositStatusProps) => {
  return (
    <Wrapper status={status} style={style}>
      <p>{status}</p>
    </Wrapper>
  );
};
export default DepositStatus;

const Wrapper = styled.div<{
  status: string;
  // status: '입장완료' | '입금확인' | '확인대기' | '기한만료';
}>`
  padding: 3px 8px;
  width: 46px;
  height: 18px;
  border-radius: 12px;
  text-align: center;
  box-sizing: border-box;

  ${({ status }) =>
    status === '확인대기' &&
    css`
      background: ${({ theme }) => theme.palette.mono.font_sub};
    `}
  ${({ status }) =>
    status === '입금확인' &&
    css`
      background: ${({ theme }) => theme.palette.point.lavender}; ;
    `}
  ${({ status }) =>
    status === '입장완료' &&
    css`
      background: ${({ theme }) => theme.palette.point.mint}; ;
    `}
  ${({ status }) =>
    status === '기한만료' &&
    css`
      background: ${({ theme }) => theme.palette.point.red}; ;
    `}

  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    ${({ theme }) => theme.typo.tag_8_b};

    /* line-height 12px로 하면 글씨가 위로 치우침 */
    margin-top: 1px;
    line-height: 11px;
    color: ${({ theme }) => theme.palette.mono.white};
  }
`;
