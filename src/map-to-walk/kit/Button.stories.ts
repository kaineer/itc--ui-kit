import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'MapWalk/Kit/Button',
  component: Button,
  parameters: {
  },
  argTypes: {
    variation: { control: 'text' },
    title: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variation: '',
    title: 'Button',
  },
}

export const Accept: Story = {
  args: {
    variation: '320x100 success',
    title: 'Одобрить'
  },
}

export const Reject: Story = {
  args: {
    variation: '320x100 danger',
    title: 'Отклонить'
  },
}

export const Edit: Story = {
  args: {
    variation: '320x100 edit',
    title: 'Редактировать',
  },
}

export const Register: Story = {
  args: {
    variation: '640x100 violet',
    title: 'Регистрация',
  },
}

export const MakeCreator: Story = {
  args: {
    variation: '346x68 violet',
    title: 'Сделать создателем',
  },
}

export const MakeCommon: Story = {
  args: {
    variation: '346x68 violet',
    title: 'Сделать обычным',
  },
}

export const Unblock: Story = {
  args: {
    variation: '210x56 success',
    title: 'Разблокировать',
  },
}

export const Remove: Story = {
  args: {
    variation: '210x56 danger',
    title: 'Удалить',
  },
}
