import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

type AppBarProps = {
  /* label */
  label: string;
};

const AppBar = ({ label }: AppBarProps) => {
  const navigate = useNavigate();
  const onClickAppBar = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Arrow onClick={onClickAppBar} />
      <p>{label}</p>
    </Wrapper>
  );
};

export default AppBar;

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  padding: 0px 18px;
  margin-bottom: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  & > :first-child {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -16px;
    cursor: pointer;
  }

  p {
    ${({ theme }) => theme.typo.appbar_18_R}
    color: ${({ theme }) => theme.palette.mono.font_main};
  }
`;
