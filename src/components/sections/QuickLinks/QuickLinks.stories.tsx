import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import QuickLinks from "./QuickLinks";

const meta: Meta<typeof QuickLinks> = {
  title: "Sections/QuickLinks",
  component: QuickLinks,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof QuickLinks>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Undergraduate Admission",
        description:
          "Start your journey at SMU. Explore programs, scholarships, and campus life in the heart of Dallas.",
        href: "/admission/undergraduate",
      },
      {
        title: "Graduate Programs",
        description:
          "Advance your career with world-class graduate and professional education from top-ranked schools.",
        href: "/admission/graduate",
      },
      {
        title: "Research Opportunities",
        description:
          "Discover cutting-edge research at one of the nation's top private research universities.",
        href: "/research",
      },
    ],
  },
};
