import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import AuthApi from '../../apis/AuthApi';
import AuthTemplate from '../../components/auth/AuthTemplate';
import useInput from '../../hooks/useInput';
import { authState } from '../../stores/auth';
import { axiosPrivate } from '../../apis/axios';
import { useMutation } from 'react-query';
import { redirectState } from '../../stores/redirect';

const Init = () => {
  const [value, bind] = useInput<string>('');
  const [auth, setAuth] = useRecoilState(authState);
  const redirectUri = useRecoilValue(redirectState);

  const navigate = useNavigate();
  const { mutate } = useMutation(AuthApi.register, {
    onSuccess: (res) => {
      localStorage.setItem('accessToken', res.data.accessToken);

      localStorage.removeItem('registerToken');
      axiosPrivate.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${res.data.accessToken}`;
      navigate(redirectUri || '/mypage', { replace: true });
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
