import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import AuthApi from '../../apis/AuthApi';
import AuthTemplate from '../../components/auth/AuthTemplate';
import useInput from '../../hooks/useInput';
import { authState } from '../../stores/auth';
import { useCookies } from 'react-cookie';
import { axiosPrivate } from '../../apis/axios';
import { useMutation } from 'react-query';

const Init = () => {
  const [value, bind] = useInput<string>('');
  const [auth, setAuth] = useRecoilState(authState);
  const [, setCookie] = useCookies(['accessToken']);
  const [, , removeCookie] = useCookies(['registerToken']);
  const navigate = useNavigate();
  const { mutate } = useMutation(AuthApi.register, {
    onSuccess: (res) => {
      let date = new Date();
      setCookie('accessToken', res.data.accessToken, {
        expires: new Date(date.setDate(date.getDate() + 3)),
        path: '/', //accessible on all pages
        secure: true, // only accessible through HTTPS
      });

      console.log(res);
      removeCookie('registerToken');
      axiosPrivate.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${res.data.accessToken}`;
      navigate('/ticketing/select', { replace: true });
    },
  });
  const handleClickRegister = async () => {
    mutate({
      payload: {
        name: value,
      },
      registerToken: auth.registerToken!,
    });
  };

  return (
    <>
      <AuthTemplate page="init" bind={bind} handleClick={handleClickRegister} />
    </>
  );
};

export default Init;
