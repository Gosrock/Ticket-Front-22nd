import { ComponentStory, ComponentMeta } from '@storybook/react';
import UtilityButton from './UtilityButton';

export default {
  title: 'mypage/UtilityButton',
  component: UtilityButton,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '160px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof UtilityButton>;

const Template: ComponentStory<typeof UtilityButton> = (args) => (
  <UtilityButton {...args} />
);

export const 주문목록티켓 = Template.bind({});
주문목록티켓.args = {
  type: 'share',
};

export const 카카오채널 = Template.bind({});
카카오채널.args = {
  type: 'kakao',
};
