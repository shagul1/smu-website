import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Stats from "./Stats";

const meta: Meta<typeof Stats> = {
  title: "Sections/Stats",
  component: Stats,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof Stats>;

export const Default: Story = {
  args: {
    stats: [
      { value: "#56", label: "National Universities", source: "U.S. News & World Report" },
      { value: "1 in 3", label: "Students Receive Need-Based Aid", source: "" },
      { value: "6,000+", label: "Research Partnerships", source: "in the Dallas–Fort Worth metroplex" },
    ],
  },
};
