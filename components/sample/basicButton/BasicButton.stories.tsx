import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BasicButton from './BasicButton';

export default {
  title: 'components/sample/BasicButton',
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;

const Template: ComponentStory<typeof BasicButton> = args => <BasicButton {...args} />;

export const common: any = Template.bind({});
common.args = {
  label: '확인',
  onClick: () => {
    console.log('click');
  },
};
