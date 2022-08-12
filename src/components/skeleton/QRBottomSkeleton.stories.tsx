import { ComponentStory, ComponentMeta } from '@storybook/react';
import QRBottomSkeleton from './QRBottomSkeleton';

export default {
  title: 'Skeleton/QRBottomSkeleton',
  component: QRBottomSkeleton,
  argTypes: {},
} as ComponentMeta<typeof QRBottomSkeleton>;

const Template: ComponentStory<typeof QRBottomSkeleton> = (args) => (
  <QRBottomSkeleton />
);

export const QRBottomskeleton = Template.bind({});
QRBottomskeleton.args = {};
