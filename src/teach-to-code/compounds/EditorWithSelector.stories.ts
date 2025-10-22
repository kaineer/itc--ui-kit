import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { EditorWithSelector } from './EditorWithSelector';

const meta = {
  title: 'TeachToCode/Compounds/EditorWithSelector',
  component: EditorWithSelector,
  parameters: {
  },
  argTypes: {
    filenames: { control: 'array' },
    initial: { control: 'text' },
  },
  args: { onFileChange: fn() },
} satisfies Meta<typeof EditorWithSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const filesToUse = [
  { name: "index.html", content: "<body>\n  <h1>Meaningless header</h1>\n</body>"},
  { name: "style.css", content: ".className {\n  color: #000;\n}" }
];

export const Base: Story = {
  args: {
    files: filesToUse,
  }
}
