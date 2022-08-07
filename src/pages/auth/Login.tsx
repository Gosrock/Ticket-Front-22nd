import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import AuthApi from '../../apis/AuthApi';
import { axiosPrivate } from '../../apis/axios';
import AuthTemplate from '../../components/auth/AuthTemplate';
import useInput from '../../hooks/useInput';
import { authState } from '../../stores/auth';
import { redirectState } from '../../stores/redirect';
import NotFound from '../common/NotFound';
import { useCookies } from 'react-cookie';

const Login = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const [valueSend, bindSend, resetSend] = useInput<string>('');
  const [valueValidate, bindValidate, resetValidate] = useInput<string>('');
  const [auth, setAuth] = useRecoilState(authState);
  const redirectUri = useRecoilValue(redirectState);
  const setCookie = useCookies(['accessToken'])[1];

  const handleClickMessageSend = async () => {
    navigate('/auth/login/2');
    const res = await AuthApi.messageSend({ phoneNumber: valueSend });
    setAuth({ ...auth, phoneNumber: res.data.phoneNumber });
    resetSend();
  };

  const handleClickMessageValidate = async () => {
    const res = await AuthApi.messageValidate({
      phoneNumber: auth.phoneNumber,
      validationNumber: valueValidate,
    });
    console.log(res);
    console.log(redirectUri);

    if (res.data.accessToken) {
      // 회원가입 되어있는 경우
      let date = new Date();
      setCookie('accessToken', res.data.accessToken, {
        expires: new Date(date.setDate(date.getDate() + 3)),
        path: '/', //accessible on all pages
        secure: true, // only accessible through HTTPS
      });

      axiosPrivate.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
      setAuth({
        ...auth,
        isAuthenticated: true,
        accessToken: res.data.accessToken,
      });
    } else {
      // 회원가입 안되어있는 경우
      localStorage.setItem('registerToken', res.data.registerToken);
      setAuth({
        ...auth,
        registerToken: res.data.registerToken,
      });
    }
    navigate(redirectUri || '/mypage');
  };

  if (step === '1') {
    return (
      <AuthTemplate
        page="send"
        bind={bindSend}
        handleClick={handleClickMessageSend}
      />
    );
  } else if (step === '2') {
    return (
      <AuthTemplate
        page="validate"
        bind={bindValidate}
        handleClick={handleClickMessageValidate}
      />
    );
  } else {
    return <NotFound />;
  }
};

export default Login;
