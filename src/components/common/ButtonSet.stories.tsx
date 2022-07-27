import { ComponentStory, ComponentMeta } from '@storybook/react';
import SetMargin from '../common/SetMargin';
import ButtonSet from './ButtonSet';

export default {
  title: 'common/ButtonSet',
  component: ButtonSet,
  argTypes: {},
} as ComponentMeta<typeof ButtonSet>;

const Template: ComponentStory<typeof ButtonSet> = (args) => (
  <ButtonSet {...args} />
);

export const _default = Template.bind({});
_default.args = {};

export const disabled = Template.bind({});
disabled.args = { state: false };
