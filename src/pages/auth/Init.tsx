import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import AuthApi from '../../apis/AuthApi';
import AuthTemplate from '../../components/auth/AuthTemplate';
import useInput from '../../hooks/useInput';
import { authState } from '../../stores/auth';

const Init = () => {
  const [value, bind] = useInput<string>('');
  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();
  const handleClickRegister = async () => {
    const res = await AuthApi.register(
      {
        name: value,
      },
      auth.registerToken,
    );
    console.log(res);
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.removeItem('registerToken');
    setAuth({ ...auth, userName: value, accessToken: res.data.accessToken });
    navigate('/ticketing/select', { replace: true });
  };

  return (
    <>
      <AuthTemplate page="init" bind={bind} handleClick={handleClickRegister} />
    </>
  );
};

export default Init;
