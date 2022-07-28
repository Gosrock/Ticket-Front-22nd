import { ComponentStory, ComponentMeta } from '@storybook/react';
import TicketInfo from './TicketInfo';

export default {
  title: 'Component/TicketInfo',
  component: TicketInfo,
  argTypes: {},
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof TicketInfo>;

const Template: ComponentStory<typeof TicketInfo> = (args) => (
  <TicketInfo {...args} />
);

export const 티켓정보 = Template.bind({});
티켓정보.args = {
  status: '입금확인',
  createat: '08월 30일 17:25',
  ticketNum: 17,
};
