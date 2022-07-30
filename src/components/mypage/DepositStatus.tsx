import styled, { css } from 'styled-components';

export interface IDepositStatusProps {
  status: string;
  // 이거 묵데이터로 테스트했을 때, 오류뜸
  // status: '입장완료' | '입금확인' | '확인대기' | '기한만료';
}

const DepositStatus = ({ status }: IDepositStatusProps) => {
  return (
    <Wrapper status={status}>
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
  width: 53px;
  height: 20px;
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
    ${({ theme }) => theme.typo.tag_10_B};
    margin-top: 1px;
    color: ${({ theme }) => theme.palette.mono.white};
  }
`;
