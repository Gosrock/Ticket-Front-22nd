import { ComponentStory, ComponentMeta } from '@storybook/react';
import DepositStatusSkeleton from './DepositStatusSkeleton';

export default {
  title: 'Skeleton/DepositStatusSkeleton',
  component: DepositStatusSkeleton,
  argTypes: {},
} as ComponentMeta<typeof DepositStatusSkeleton>;

const Template: ComponentStory<typeof DepositStatusSkeleton> = (args) => (
  <DepositStatusSkeleton {...args} />
);

export const 입금상태skeleton = Template.bind({});
입금상태skeleton.args = {
  setBackground: true,
};
