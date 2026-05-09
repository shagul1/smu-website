import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import VideoSection from "./VideoSection";

const meta: Meta<typeof VideoSection> = {
  title: "Sections/VideoSection",
  component: VideoSection,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof VideoSection>;

export const Default: Story = {
  args: {
    youtubeId: "UgbKBHSkMV0",
    title: "Welcome to SMU",
  },
};
