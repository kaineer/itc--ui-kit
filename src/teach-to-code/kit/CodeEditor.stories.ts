import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CodeEditor } from './CodeEditor';

const meta = {
  title: 'TeachToCode/Kit/CodeEditor',
  component: CodeEditor,
  parameters: {
  },
  argTypes: {
    language: { control: 'text' },
    value: { control: 'text' },
    minHeight: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CodeEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  }
}

export const Javascript: Story = {
  args: {
    language: "javascript",
    value: 'console.log("Hello, world!");',
  }
}

export const Css: Story = {
  args: {
    language: "css",
    value: '.className {\n  color: "#f06d06";\n}',
  }
}

export const Html: Story = {
  args: {
    language: "html",
    value: "<h1>Meaningless title</h1>",
  }
}
