import { ComponentStory, ComponentMeta } from '@storybook/react';
import TicketInfoSkeleton from './TicketInfoSkeleton';

export default {
  title: 'Skeleton/TicketInfoSkeleton',
  component: TicketInfoSkeleton,
  argTypes: {},
} as ComponentMeta<typeof TicketInfoSkeleton>;

const Template: ComponentStory<typeof TicketInfoSkeleton> = (args) => (
  <TicketInfoSkeleton />
);

export const 티켓정보skeleton = Template.bind({});
티켓정보skeleton.args = {};
