import { ComponentStory, ComponentMeta } from '@storybook/react';
import UtilityButton from './UtilityButton';

export default {
  title: 'mypage/UtilityButton',
  component: UtilityButton,
  argTypes: {},
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof UtilityButton>;

const Template: ComponentStory<typeof UtilityButton> = (args) => (
  <UtilityButton {...args} />
);

export const 주문목록티켓 = Template.bind({});
주문목록티켓.args = {
  type: 'share',
};
