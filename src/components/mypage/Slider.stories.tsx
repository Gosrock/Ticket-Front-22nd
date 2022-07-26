import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';

export default {
  title: 'Component/Slider',
  component: Slider,
  argTypes: {},
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const 슬라이더 = Template.bind({});
슬라이더.args = {
  title: '응원 톡',
  titleHighlight: '남기기',
  content:
    '“긴 입력 예시야. 아좌좌좌!!  긴 입력 예...”아아아아아 아아아아 아아아아아아아아 아아아아아아 ',
  contentWriter: 'from. 서도철',
  team: 'YB',
};
