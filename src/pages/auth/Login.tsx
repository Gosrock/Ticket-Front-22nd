import { useParams } from 'react-router-dom';
import AuthTemplate from '../../components/auth/AuthTemplate';

const Login = () => {
  const { step } = useParams();
  return (
    <>
      <AuthTemplate page="send" />
    </>
  );
};

export default Login;
