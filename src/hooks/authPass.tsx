import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../stores/auth';

interface IauthPassHOC {
  PassComponent: () => JSX.Element;
  ErrUrl: string;
  ErrMessage: string;
}

const authPassHOC = ({ PassComponent, ErrUrl, ErrMessage }: IauthPassHOC) => {
  const { authenticated } = useRecoilValue(authState);
  const { pathname } = useLocation();

  console.log(pathname, authenticated, ErrMessage);
  if (!authenticated) {
    alert(ErrMessage);
  }
  return authenticated === true ? <PassComponent /> : <Navigate to={ErrUrl} />;
};

export default authPassHOC;
