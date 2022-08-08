import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';

export default {
  title: 'mypage/Slider',
  component: Slider,
  argTypes: {},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const 슬라이더 = Template.bind({});
슬라이더.args = {
  titleDark: '응원 톡',
  titleHighlight: '남기기',
  content:
    '긴 입력 예시야. 아좌좌좌!!  긴 입력 예아아아아아 아아아아 아아아아아아아아 아아아아아아 ',
  contentWriter: '서도철',
  team: 'YB',
};
