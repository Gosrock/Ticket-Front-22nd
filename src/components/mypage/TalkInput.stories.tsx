import { ComponentStory, ComponentMeta } from '@storybook/react';
import TalkInput from './TalkInput';

export default {
  title: 'Component/TalkInput',
  component: TalkInput,
  argTypes: {},
} as ComponentMeta<typeof TalkInput>;

const Template: ComponentStory<typeof TalkInput> = (args) => (
  <TalkInput {...args} />
);

export const 입력창 = Template.bind({});
입력창.args = {
  sendMessage: (InputMessage) => {},
};
