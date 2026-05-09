import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="mt-2 text-gray-600">Some descriptive content goes here.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    elevated: true,
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold">Elevated Card</h3>
        <p className="mt-2 text-gray-600">This card has a shadow for emphasis.</p>
      </div>
    ),
  },
};

export const AsLink: Story = {
  args: {
    href: "/academics",
    elevated: true,
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold text-smu-blue">Clickable Card</h3>
        <p className="mt-2 text-gray-600">Click to navigate to /academics.</p>
      </div>
    ),
  },
};
