import { ComponentStory, ComponentMeta } from '@storybook/react';
import TalkInput from './TalkInput';

export default {
  title: 'mypage/TalkInput',
  component: TalkInput,
  argTypes: {},
} as ComponentMeta<typeof TalkInput>;

const Template: ComponentStory<typeof TalkInput> = (args) => (
  <TalkInput {...args} />
);

export const 입력창_닫힘 = Template.bind({});
입력창_닫힘.args = {
  isOpen: false,
};

export const 입력창_열림 = Template.bind({});
입력창_열림.args = {
  isOpen: true,
};
