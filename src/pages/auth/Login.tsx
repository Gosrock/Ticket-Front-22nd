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
import { useMutation } from 'react-query';
import useModal from '../../hooks/useModal';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const [valueSend, bindSend, resetSend] = useInput<string>('');
  const [valueValidate, bindValidate, resetValidate] = useInput<string>('');
  const [auth, setAuth] = useRecoilState(authState);
  const redirectUri = useRecoilValue(redirectState);
  const setAccessToken = useCookies(['accessToken'])[1];
  const setRegisterToken = useCookies(['registerToken'])[1];
  const { openModal, closeModal } = useModal();
  const { mutate: mutateSend } = useMutation(AuthApi.messageSend);
  const { mutate: mutateValidate } = useMutation(AuthApi.messageValidate);

  useEffect(() => {
    if (step === '2' && auth.phoneNumber === null) {
      console.log('redirect');
      //navigate('/');
    }
  }, [step]);

  const handleClickMessageSend = async () => {
    navigate('/auth/login/2');
    mutateSend(
      { phoneNumber: valueSend },
      {
        onSuccess: (data) => {
          setAuth({ ...auth, phoneNumber: data.data.phoneNumber });
          resetSend();
        },
        onError: () => navigate('/auth/login/1'),
      },
    );
  };

  const handleClickMessageValidate = async () => {
    mutateValidate(
      {
        phoneNumber: auth.phoneNumber!,
        validationNumber: valueValidate,
      },
      {
        onSuccess: (data) => {
          let date = new Date();
          if (data.data.accessToken) {
            // 회원가입 되어있는 경우
            setAccessToken('accessToken', data.data.accessToken, {
              expires: new Date(date.setDate(date.getDate() + 3)),
              path: '/', //accessible on all pages
              secure: true, // only accessible through HTTPS
            });
            console.log(data.data.accessToken);
            axiosPrivate.defaults.headers.common.Authorization = `Bearer ${data.data.accessToken}`;
            setAuth({
              ...auth,
              isAuthenticated: true,
            });
          } else {
            // 회원가입 안되어있는 경우
            setRegisterToken('registerToken', data.data.registerToken, {
              expires: new Date(date.setDate(date.getMinutes() + 10)),
              path: '/', //accessible on all pages
              secure: true, // only accessible through HTTPS
            });
            setAuth({
              ...auth,
              registerToken: data.data.registerToken,
            });
          }
          navigate(redirectUri || '/mypage');
        },
      },
    );
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
        onResendButtonClick={() => {
          mutateSend({ phoneNumber: auth.phoneNumber! });
          openModal({
            modalType: 'Notice',
            modalProps: {
              onClick: () => {
                closeModal();
              },
              type: '재전송',
            },
          });
        }}
      />
    );
  } else {
    return <NotFound />;
  }
};

export default Login;
