import { ComponentStory, ComponentMeta } from '@storybook/react';
import Team from './Team';

export default {
  title: 'mypage/Team',
  component: Team,
  argTypes: {},
} as ComponentMeta<typeof Team>;

const Template: ComponentStory<typeof Team> = (args) => <Team {...args} />;

export const 와이비 = Template.bind({});
와이비.args = {
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
};

export const 와이비blank = Template.bind({});
와이비blank.args = {
  date: 'YB',
  order: 4,
  teamName: '금예인팀',
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
    {
      parts: 'blank',
      name: 'blank',
      blank: true,
    },
    {
      parts: 'V',
      name: '김민우',
    },
    {
      parts: 'G',
      name: '김의현',
    },
  ],
};

export const 오비 = Template.bind({});
오비.args = {
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
};
