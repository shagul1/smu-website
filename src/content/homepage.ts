import type { QuickLink } from "@/components/sections/QuickLinks";
import type { StudyArea } from "@/components/sections/AreasOfStudy";
import type { Stat } from "@/components/sections/Stats";
import type { NewsArticle } from "@/components/sections/NewsGrid";

export const hero = {
  headline: "MUSTANGS MAKE COLLEGE INTERNSHIPS COUNT",
  subtext:
    "A top private research university in the heart of Dallas, SMU prepares students to be creative thinkers, ethical leaders, and agents of change.",
  ctaLabel: "Explore Opportunities",
  ctaHref: "/academics",
};

export const quickLinks: QuickLink[] = [
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
];

export const areasOfStudy: StudyArea[] = [
  { title: "Business & Accounting", href: "/academics/cox" },
  { title: "Engineering & Computer Science", href: "/academics/lyle" },
  { title: "Arts & Humanities", href: "/academics/dedman" },
  { title: "Science & Mathematics", href: "/academics/dedman/science" },
  { title: "Law", href: "/academics/law" },
  { title: "Theology", href: "/academics/perkins" },
  { title: "Education & Human Development", href: "/academics/education" },
  { title: "Music", href: "/academics/meadows/music" },
];

export const stats: Stat[] = [
  { value: "#56", label: "National Universities", source: "U.S. News & World Report" },
  { value: "1 in 3", label: "Students Receive Need-Based Aid", source: "" },
  { value: "6,000+", label: "Research Partnerships", source: "in the Dallas–Fort Worth metroplex" },
];

export const news: NewsArticle[] = [
  {
    title: "SMU Mustangs Make College Internships Count",
    date: "2026-05-01",
    category: "Student Life",
    imageUrl: "/images/news-internships.jpg",
    href: "/news/internships",
  },
  {
    title: "SMU Researchers Develop New Carbon Capture Technology",
    date: "2026-04-28",
    category: "Research",
    imageUrl: "/images/news-research.jpg",
    href: "/news/carbon-capture",
  },
  {
    title: "Meadows Museum Acquires Rare 15th-Century Spanish Painting",
    date: "2026-04-22",
    category: "Arts & Culture",
    imageUrl: "/images/news-museum.jpg",
    href: "/news/meadows-museum",
  },
  {
    title: "SMU Law School Ranked Among Top 50 by U.S. News",
    date: "2026-04-15",
    category: "Rankings",
    imageUrl: "/images/news-law.jpg",
    href: "/news/law-ranking",
  },
];

export const video = {
  youtubeId: "UgbKBHSkMV0",
  title: "Welcome to SMU",
};
