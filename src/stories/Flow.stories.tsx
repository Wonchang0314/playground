import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlowPlayGround } from "../components/Flows/Flow";
import { playgroundContainer } from "../components/Flows/styles/index.css.ts";

const meta: Meta<typeof FlowPlayGround> = {
  title: "Flow",
  component: FlowPlayGround,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    playgroundContainer,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => <FlowPlayGround />,
};
