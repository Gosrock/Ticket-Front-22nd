import { ComponentStory, ComponentMeta } from '@storybook/react';
import TicketInfo from './TicketInfo';

export default {
  title: 'mypage/TicketInfo',
  component: TicketInfo,
  argTypes: {},
} as ComponentMeta<typeof TicketInfo>;

const Template: ComponentStory<typeof TicketInfo> = (args) => (
  <TicketInfo {...args} />
);

export const 티켓정보 = Template.bind({});
티켓정보.args = {
  status: '입금확인',
  createdat: '08/30 17:25',
  id: 17,
};
