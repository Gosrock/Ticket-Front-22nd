import { ComponentStory, ComponentMeta } from '@storybook/react';
import SetMargin from '../common/SetMargin';
import InputForm from './InputForm';

export default {
  title: 'common/InputForm',
  component: InputForm,
  argTypes: {},
  decorators: [
    (Story) => (
      <SetMargin>
        <Story />
      </SetMargin>
    ),
  ],
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
  <InputForm {...args} />
);

export const 휴대폰번호_입력 = Template.bind({});
휴대폰번호_입력.args = {
  page: 'send',
  bind: { value: '', onChange: (e) => {} },
};
export const 인증번호_입력 = Template.bind({});
인증번호_입력.args = {
  page: 'validate',
  bind: { value: '', onChange: (e) => {} },
};
export const 이름_입력 = Template.bind({});
이름_입력.args = {
  page: 'init',
  bind: { value: '', onChange: (e) => {} },
};
