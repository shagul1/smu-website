import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "outline"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Explore SMU", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Learn More", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "View All Programs", variant: "outline" },
};

export const Small: Story = {
  args: { children: "Apply Now", size: "sm" },
};

export const Large: Story = {
  args: { children: "Request Information", size: "lg" },
};

export const AsLink: Story = {
  args: { children: "Visit Academics", href: "/academics" },
};

export const Disabled: Story = {
  args: { children: "Unavailable", disabled: true },
};
