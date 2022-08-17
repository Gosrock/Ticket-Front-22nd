export interface IBannerDataProps {
  type: 'talk' | 'location' | 'developers' | 'kakao' | 'account';
  title: string;
  subtitle: string;
}

export const bannerData: Array<IBannerDataProps> = [
  {
    type: 'location',
    subtitle: '헤매지 마세요',
    title: '공연장 정보',
  },
  {
    type: 'talk',
    subtitle: '응원톡 남기고',
    title: '기프티콘 받자!',
  },
  {
    type: 'developers',
    subtitle: '고스락 티켓 프로젝트',
    title: '개발자들',
  },
  {
    type: 'kakao',
    subtitle: '궁금한게 있을 때',
    title: '고스락 카카오 채널',
  },
  {
    type: 'account',
    subtitle: '',
    title: '입금 계좌 보기',
  },
];
