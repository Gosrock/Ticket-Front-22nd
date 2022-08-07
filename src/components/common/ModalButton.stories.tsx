import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalButton from './ModalButton';

export default {
  title: 'common/UtilityButton',
  component: ModalButton,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '160px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ModalButton>;

const Template: ComponentStory<typeof ModalButton> = (args) => (
  <ModalButton {...args} />
);

export const 확인했어요 = Template.bind({});
확인했어요.args = {
  label: '확인했어요',
};
