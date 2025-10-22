import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { FileBadge } from './FileBadge';

const meta = {
  title: 'TeachToCode/Kit/FileBadge',
  component: FileBadge,
  parameters: {
  },
  argTypes: {
    title: { control: 'text' },
    active: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FileBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'base.html',
    active: false,
  }
}

export const Active: Story = {
  args: {
    title: 'active.html',
    active: true,
  }
}
