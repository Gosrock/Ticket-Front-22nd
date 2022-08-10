export interface IBannerDataProps {
  type: 'talk' | 'location' | 'developers' | 'kakao';
  title: string;
  subtitle: string;
}

export const bannerData: Array<IBannerDataProps> = [
  {
    type: 'location',
    subtitle: '헤메지 마세요',
    title: '공연장 정보',
  },
  {
    type: 'talk',
    subtitle: '응원톡 남기고',
    title: '스타벅스 받자!',
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
];
