import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import AuthApi from '../../apis/AuthApi';
import AuthTemplate from '../../components/auth/AuthTemplate';
import useInput from '../../hooks/useInput';
import { authState } from '../../stores/auth';
import { useCookies } from 'react-cookie';

const Init = () => {
  const [value, bind] = useInput<string>('');
  const [auth, setAuth] = useRecoilState(authState);
  const setCookie = useCookies(['accessToken'])[1];
  const navigate = useNavigate();
  const handleClickRegister = async () => {
    const res = await AuthApi.register(
      {
        name: value,
      },
      auth.registerToken,
    );

    let date = new Date();
    setCookie('accessToken', res.data.accessToken, {
      expires: new Date(date.setDate(date.getDate() + 3)),
      path: '/', //accessible on all pages
      secure: true, // only accessible through HTTPS
    });

    console.log(res);
    localStorage.removeItem('registerToken');
    setAuth({ ...auth });
    navigate('/ticketing/select', { replace: true });
  };

  return (
    <>
      <AuthTemplate page="init" bind={bind} handleClick={handleClickRegister} />
    </>
  );
};

export default Init;
