import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const AdtitleL = styled.div`
  ${({ theme }) => theme.typo.landing.title_48_B}
  margin-top: 180px;
  margin-bottom: 80px;
  margin-right: auto;
  & > h2 {
    margin-bottom: 10px;
  }
`;
const AdtitleR = styled.div`
  ${({ theme }) => theme.typo.landing.title_48_B}
  margin-top: 180px;
  margin-bottom: 80px;
  margin-left: auto;
  & > h2 {
    margin-bottom: 10px;
  }
`;
