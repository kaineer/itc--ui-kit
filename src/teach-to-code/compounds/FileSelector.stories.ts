import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { FileSelector } from './FileSelector';

const meta = {
  title: 'TeachToCode/Compounds/FileSelector',
  component: FileSelector,
  parameters: {
  },
  argTypes: {
    filenames: { control: 'array' },
    initial: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FileSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    filenames: ["index.html", "style.css", "script.js"],
    initial: "index.html",
  }
}
