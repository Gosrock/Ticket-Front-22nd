import { ComponentStory, ComponentMeta } from '@storybook/react';
import DepositStatus from './DepositStatus';

export default {
  title: 'mypage/DepositStatus',
  component: DepositStatus,
  argTypes: {},
} as ComponentMeta<typeof DepositStatus>;

const Template: ComponentStory<typeof DepositStatus> = (args) => (
  <DepositStatus {...args} />
);

export const 입금상태 = Template.bind({});
입금상태.args = {
  status: '입금확인',
};
