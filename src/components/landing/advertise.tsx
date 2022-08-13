import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Adcard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 750px;
  height: 310px;
  margin: 40px auto;
  & > p {
    ${({ theme }) => theme.typo.title_24_B}
    color: ${({ theme }) => theme.palette.mono.black_36};
    margin-top: 10px;
    height: auto;
    & > span {
      background: linear-gradient(
        180deg,
        rgba(255, 119, 133, 0) 53.11%,
        rgba(255, 119, 133, 0.5) 53.12%,
        rgba(255, 119, 133, 0.5) 99.99%,
        rgba(255, 119, 133, 0.5) 100%
      );
    }
  }
  & > img {
    height: 100%;
    width: auto;
  }
`;

export default Adcard;
