import { ComponentStory, ComponentMeta } from '@storybook/react';
import PurchaseTicket from './PurchaseTicket';

export default {
  title: 'Component/PurchaseTicket',
  component: PurchaseTicket,
  argTypes: {},
} as ComponentMeta<typeof PurchaseTicket>;

const Template: ComponentStory<typeof PurchaseTicket> = (args) => (
  <PurchaseTicket {...args} />
);

export const 티켓구매 = Template.bind({});
티켓구매.args = {};
