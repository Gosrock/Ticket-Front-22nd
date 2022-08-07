import { ISliderProps } from './Slider';

export const sliderData: Array<ISliderProps> = [
  {
    titleHighlight: '응원 톡',
    titleDark: '남기기',
    content:
      '긴 입력 예시야. 아좌좌좌!!  긴 입력 예아아아아아 아아아아 아아아아아아아아아아아 아아아아 아아아아아아아아 아아아아아아아아아아 아아아아 아아아아아아아아 아아아아아아아아아아 아아아아 아아아아아아아아 아아아아아아아 아아아아아아 ',
    contentWriter: '서도철',
    team: null,
    onClick: () => {
      //   window.location.href = 'https://gosrock.band/mypage/talk';
      window.location.href = 'http://localhost:3000/mypage/talk';
    },
  },
  {
    titleHighlight: '오시는 길',
    titleDark: '바로가기',
    content: '9/1\n돌다리도 두들겨보고 건너라\n공연장의 위치는?',
    contentWriter: null,
    team: 'YB',
    onClick: () => {
      window.location.href = 'https://naver.me/x229ewi0';
    },
  },
  {
    titleHighlight: '오시는 길',
    titleDark: '바로가기',
    content: '9/2\n돌다리도 두들겨보고 건너라\n공연장의 위치는?',
    contentWriter: null,
    team: 'OB',
    onClick: () => {
      window.location.href = 'https://naver.me/5axu8Onc';
    },
  },
  {
    titleHighlight: '입금계좌',
    titleDark: '확인하기',
    content: '혹시 깜빡하고 입금을 못하셨나요??',
    contentWriter: null,
    team: null,
    onClick: () => {},
  },
  {
    titleHighlight: '개발자들',
    titleDark: '칭찬해주기',
    content: '이 프로젝트에 참여한 사람들이에요',
    contentWriter: null,
    team: null,
    onClick: () => {},
  },
  {
    titleHighlight: '카카오 채널',
    titleDark: '바로가기',
    content: '고스락의 소식을 제일 빨리 받아보고 싶다면',
    contentWriter: null,
    team: null,
    onClick: () => {
      window.location.href = 'https://pf.kakao.com/_QxeZBT';
    },
  },
];
