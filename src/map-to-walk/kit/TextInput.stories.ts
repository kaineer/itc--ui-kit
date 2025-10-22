import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from './TextInput';

const meta = {
  title: 'MapWalk/Kit/TextInput',
  component: TextInput,
  parameters: {
  },
  argTypes: {
    variation: { control: 'text' },
    defaultValue: { control: 'text' },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    defaultValue: 'Hello input',
    variation: void 0,
  }
}
