import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  env: (config) => ({
    ...config,
    EDITOR: "/home/kaineer/.local/bin/zed",
  }),
};
export default config;
