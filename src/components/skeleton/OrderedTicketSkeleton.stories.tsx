import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderedTicketSkeleton from './OrderedTicketSkeleton';

export default {
  title: 'Skeleton/OrderedTicketSkeleton',
  component: OrderedTicketSkeleton,
  argTypes: {},
} as ComponentMeta<typeof OrderedTicketSkeleton>;

const Template: ComponentStory<typeof OrderedTicketSkeleton> = (args) => (
  <OrderedTicketSkeleton />
);

export const 주문목록티켓skeleton = Template.bind({});
주문목록티켓skeleton.args = {};
