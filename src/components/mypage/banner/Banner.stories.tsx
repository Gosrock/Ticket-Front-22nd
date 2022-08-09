import { ComponentStory, ComponentMeta } from '@storybook/react';
import Banner from './Banner';

export default {
  title: 'mypage/Banner',
  component: Banner,
  argTypes: {},
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const 슬라이더 = Template.bind({});
슬라이더.args = {
  type: 'talk',
  subtitle: '응원톡 남기고',
  title: '스타벅스 받자!',
};
