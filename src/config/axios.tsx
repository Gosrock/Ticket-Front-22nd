import axios from 'axios';

const BASE_URL = 'https://api.gosrock.band';

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// private 요청에 어세스토큰 헤더로 껴서 실행
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (config.headers && token !== null) {
      config.headers.accessToken = `Bearer ${token}`;
    } else {
      config.headers = {};
    }
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됩니다.
    return Promise.reject(error);
  },
);

// 토큰 오류시 만료된 토큰 지우고 알려주기
axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      response: {
        status,
        data: { message },
      },
    } = error;
    if (status === 401) {
      //401 이면 토큰오류이므로 해당으로 통일.
      if (message !== '인증번호 불일치') {
        localStorage.removeItem('userAccessToken');
        // 새로운 토큰 저장
        axiosPrivate.defaults.headers.common.Authorization = '';
        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청

        alert('인증 기한이 끝났습니다. 다시 인증 해주세요');
        window.location.href = '/';
      }

      // 로컬 스토리지에 어세스토큰 삭제
    }
    return Promise.reject(error);
  },
);
