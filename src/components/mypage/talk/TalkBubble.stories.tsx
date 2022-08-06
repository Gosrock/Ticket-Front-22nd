import { ComponentStory, ComponentMeta } from '@storybook/react';
import TalkBubble from './TalkBubble';

export default {
  title: 'mypage/TalkBubble',
  component: TalkBubble,
  argTypes: {},
} as ComponentMeta<typeof TalkBubble>;

const Template: ComponentStory<typeof TalkBubble> = (args) => (
  <TalkBubble {...args} />
);

export const 예시 = Template.bind({});
예시.args = {
  nickName: '마두동 어쩌구',
  createdAt: '2022-08-06T16:17:27.047Z',
  content: '응원톡을 써주신 분께는 추첨을 통해',
  iComment: false,
};
