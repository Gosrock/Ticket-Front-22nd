export interface ITeamData {
  date: 'YB' | 'OB';
  order: number;
  teamName: string;
  members: Array<{
    parts: string;
    name: string;
  }>;
}

export const YBData: Array<ITeamData> = [
  {
    date: 'YB',
    order: 1,
    teamName: '돈까스 망치',
    members: [
      {
        parts: 'V',
        name: '김원진',
      },
      {
        parts: 'G',
        name: '김민우',
      },
      {
        parts: 'G',
        name: '노경민',
      },
      {
        parts: 'B',
        name: '한규진',
      },
      {
        parts: 'K',
        name: '김민준',
      },
      {
        parts: 'D',
        name: '채승희',
      },
    ],
  },
  {
    date: 'YB',
    order: 2,
    teamName: '락스타 애옹이',
    members: [
      {
        parts: 'V',
        name: '이예지',
      },
      {
        parts: 'G',
        name: '정윤지',
      },
      {
        parts: 'G',
        name: '문창일',
      },
      {
        parts: 'B',
        name: '이찬',
      },
      {
        parts: 'K',
        name: '서재은',
      },
      {
        parts: 'D',
        name: '고윤정',
      },
    ],
  },
  {
    date: 'YB',
    order: 3,
    teamName: '전채관람가',
    members: [
      {
        parts: 'V',
        name: '전채운',
      },
      {
        parts: 'G',
        name: '문창일',
      },
      {
        parts: 'G',
        name: '윤다영',
      },
      {
        parts: 'B',
        name: '김태희',
      },
      {
        parts: 'K',
        name: '송유림',
      },
      {
        parts: 'D',
        name: '박도연',
      },
    ],
  },
  {
    date: 'YB',
    order: 4,
    teamName: '돌주먹정권',
    members: [
      {
        parts: 'V',
        name: '김민우',
      },
      {
        parts: 'G',
        name: '김의현',
      },
    ],
  },
  {
    date: 'YB',
    order: 5,
    teamName: '김의현',
    members: [
      {
        parts: 'V',
        name: '박준서',
      },
      {
        parts: 'G',
        name: '김민우',
      },
      {
        parts: 'B',
        name: '강나연',
      },
      {
        parts: 'K',
        name: '금예인',
      },
      {
        parts: 'D',
        name: '반성준',
      },
    ],
  },
  {
    date: 'YB',
    order: 6,
    teamName: '눈빨간 볼나비',
    members: [
      {
        parts: 'V',
        name: '이승용',
      },
      {
        parts: 'G',
        name: '정윤지',
      },
      {
        parts: 'G',
        name: '이한비',
      },
      {
        parts: 'G',
        name: '전채운',
      },
      {
        parts: 'B',
        name: '안혜연',
      },
      {
        parts: 'B',
        name: '장유림',
      },
      {
        parts: 'K',
        name: '변희주',
      },
      {
        parts: 'D',
        name: '김인영',
      },
      {
        parts: 'D',
        name: '박찬혁',
      },
    ],
  },
  {
    date: 'YB',
    order: 7,
    teamName: 'Ohio',
    members: [
      {
        parts: 'V',
        name: '한지예',
      },
      {
        parts: 'G',
        name: '한혜수',
      },
      {
        parts: 'G',
        name: '이한결',
      },
      {
        parts: 'B',
        name: '이예성',
      },
      {
        parts: 'K',
        name: '최민혁',
      },
      {
        parts: 'D',
        name: '박찬혁',
      },
    ],
  },
];

export const OBData: Array<ITeamData> = [
  {
    date: 'OB',
    order: 1,
    teamName: '무희',
    members: [
      {
        parts: 'V',
        name: '박정표',
      },
      {
        parts: 'G',
        name: '김태광',
      },
      {
        parts: 'G',
        name: '김민석',
      },
      {
        parts: 'B',
        name: '박상범',
      },
      {
        parts: 'K',
        name: '최민혁',
      },
      {
        parts: 'D',
        name: '김정선',
      },
    ],
  },
  {
    date: 'OB',
    order: 2,
    teamName: '지니와 좌니',
    members: [
      {
        parts: 'V',
        name: '홍진명',
      },
      {
        parts: 'G',
        name: '한태희',
      },
      {
        parts: 'B',
        name: '한규진',
      },
      {
        parts: 'K',
        name: '최재희',
      },
      {
        parts: 'D',
        name: '김주안',
      },
    ],
  },
  {
    date: 'OB',
    order: 3,
    teamName: '신이난 영환',
    members: [
      {
        parts: 'V',
        name: '전영환',
      },
      {
        parts: 'G',
        name: '한태희',
      },
      {
        parts: 'B',
        name: '류형철',
      },
      {
        parts: 'K',
        name: '신이나',
      },
      {
        parts: 'D',
        name: '백승훈',
      },
    ],
  },
  {
    date: 'OB',
    order: 4,
    teamName: 'A789',
    members: [
      {
        parts: 'V',
        name: '양훈석',
      },
      {
        parts: 'C',
        name: '김하영',
      },
      {
        parts: 'G',
        name: '오상훈',
      },
      {
        parts: 'G,D',
        name: '정원우',
      },
      {
        parts: 'G',
        name: '오상호',
      },
      {
        parts: 'D',
        name: '박상우',
      },
      {
        parts: 'K',
        name: '이새롬',
      },
      {
        parts: 'B',
        name: '장문석',
      },
    ],
  },
  {
    date: 'OB',
    order: 5,
    teamName: '쉽지않네',
    members: [
      {
        parts: 'V',
        name: '김지석',
      },
      {
        parts: 'G',
        name: '김병훈',
      },
      {
        parts: 'G',
        name: '이상현',
      },
      {
        parts: 'B',
        name: '김선혜',
      },
      {
        parts: 'D',
        name: '최낙현',
      },
    ],
  },
  {
    date: 'OB',
    order: 6,
    teamName: '서도철팀',
    members: [
      {
        parts: 'V',
        name: '이준영',
      },
      {
        parts: 'G',
        name: '김하영',
      },
      {
        parts: 'B',
        name: '봉세환',
      },
      {
        parts: 'K',
        name: '서예진',
      },
      {
        parts: 'D',
        name: '이찬진',
      },
    ],
  },
];
