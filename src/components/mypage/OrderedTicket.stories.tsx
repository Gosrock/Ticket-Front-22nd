import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderedTicket from './OrderedTicket';

export default {
  title: 'Component/OrderedTicket',
  component: OrderedTicket,
  argTypes: {},
} as ComponentMeta<typeof OrderedTicket>;

const Template: ComponentStory<typeof OrderedTicket> = (args) => (
  <OrderedTicket {...args} />
);

export const 주문목록티켓 = Template.bind({});
주문목록티켓.args = {
  status: '입금확인',
  createdat: '22.08.30 (화)',
  id: 10001,
  selection: 'BOTH',
  ticketCount: 1,
};
