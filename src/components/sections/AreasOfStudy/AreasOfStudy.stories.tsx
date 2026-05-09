import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AreasOfStudy from "./AreasOfStudy";

const meta: Meta<typeof AreasOfStudy> = {
  title: "Sections/AreasOfStudy",
  component: AreasOfStudy,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof AreasOfStudy>;

export const Default: Story = {
  args: {
    areas: [
      { title: "Business & Accounting", href: "/academics/cox" },
      { title: "Engineering & Computer Science", href: "/academics/lyle" },
      { title: "Arts & Humanities", href: "/academics/dedman" },
      { title: "Science & Mathematics", href: "/academics/dedman/science" },
      { title: "Law", href: "/academics/law" },
      { title: "Theology", href: "/academics/perkins" },
      { title: "Education & Human Development", href: "/academics/education" },
      { title: "Music", href: "/academics/meadows/music" },
    ],
  },
};
