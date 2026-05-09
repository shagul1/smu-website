import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: "MUSTANGS MAKE COLLEGE INTERNSHIPS COUNT",
    subtitle:
      "A top private research university in the heart of Dallas, SMU prepares students to be creative thinkers, ethical leaders, and agents of change.",
    ctaLabel: "Explore Opportunities",
    ctaHref: "/academics",
  },
};

export const WithBackgroundImage: Story = {
  args: {
    title: "MUSTANGS MAKE COLLEGE INTERNSHIPS COUNT",
    subtitle:
      "A top private research university in the heart of Dallas, SMU prepares students to be creative thinkers, ethical leaders, and agents of change.",
    ctaLabel: "Explore Opportunities",
    ctaHref: "/academics",
    backgroundImage: "https://www.smu.edu/-/media/site/stories/fy26/internships/web-banner-1875x600.jpg",
    backgroundImageAlt: "SMU campus internship banner",
  },
};
