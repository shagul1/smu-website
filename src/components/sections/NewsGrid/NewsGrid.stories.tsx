import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NewsGrid from "./NewsGrid";

const meta: Meta<typeof NewsGrid> = {
  title: "Sections/NewsGrid",
  component: NewsGrid,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof NewsGrid>;

export const Default: Story = {
  args: {
    articles: [
      {
        title: "SMU Mustangs Make College Internships Count",
        date: "2026-05-01",
        category: "Student Life",
        imageUrl: "https://www.smu.edu/-/media/site/stories/fy26/internships/web-banner-1875x600.jpg",
        href: "/news/internships",
      },
      {
        title: "SMU Researchers Develop New Carbon Capture Technology",
        date: "2026-04-28",
        category: "Research",
        imageUrl: "https://www.smu.edu/-/media/site/home/fy25/home-assets/campus-beauty.jpg",
        href: "/news/carbon-capture",
      },
      {
        title: "Meadows Museum Acquires Rare 15th-Century Spanish Painting",
        date: "2026-04-22",
        category: "Arts & Culture",
        imageUrl: "https://www.smu.edu/-/media/site/news/latest/kit-sawers.jpg",
        href: "/news/meadows-museum",
      },
      {
        title: "SMU Law School Ranked Among Top 50 by U.S. News",
        date: "2026-04-15",
        category: "Rankings",
        imageUrl: "https://www.smu.edu/-/media/site/news/1v0a3067.jpg",
        href: "/news/law-ranking",
      },
    ],
  },
};
