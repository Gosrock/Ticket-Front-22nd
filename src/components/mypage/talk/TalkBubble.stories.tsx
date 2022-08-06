import { ComponentStory, ComponentMeta } from '@storybook/react';
import TalkBubble from './TalkBubble';

export default {
  title: 'mypage/TalkInput',
  component: TalkBubble,
  argTypes: {},
} as ComponentMeta<typeof TalkBubble>;

const Template: ComponentStory<typeof TalkBubble> = (args) => (
  <TalkBubble {...args} />
);

export const 입력창 = Template.bind({});
입력창.args = {};
