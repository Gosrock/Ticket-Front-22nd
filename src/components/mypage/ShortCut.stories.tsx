import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShortCut from './ShortCut';

export default {
  title: 'mypage/ShortCut',
  component: ShortCut,
  argTypes: {},
} as ComponentMeta<typeof ShortCut>;

const Template: ComponentStory<typeof ShortCut> = (args) => (
  <ShortCut {...args} />
);

export const 고스락_응원톡 = Template.bind({});
고스락_응원톡.args = {
  type: 'talk',
};

export const 메인페이지 = Template.bind({});
메인페이지.args = {
  type: 'mainPage',
};
