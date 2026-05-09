import { render, screen } from "@testing-library/react";
import AreasOfStudy from "./AreasOfStudy";

const areas = [
  { title: "Business & Accounting", href: "/academics/cox" },
  { title: "Engineering & Computer Science", href: "/academics/lyle" },
  { title: "Law", href: "/academics/law" },
];

describe("AreasOfStudy", () => {
  it("renders the section heading", () => {
    render(<AreasOfStudy areas={areas} />);
    expect(screen.getByRole("heading", { name: /areas of study/i })).toBeInTheDocument();
  });

  it("renders all area titles as links", () => {
    render(<AreasOfStudy areas={areas} />);
    areas.forEach((area) => {
      expect(screen.getByRole("link", { name: area.title })).toHaveAttribute("href", area.href);
    });
  });

  it("renders the correct number of list items", () => {
    render(<AreasOfStudy areas={areas} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(areas.length);
  });

  it("has a section landmark", () => {
    render(<AreasOfStudy areas={areas} />);
    expect(screen.getByRole("region", { name: /areas of study/i })).toBeInTheDocument();
  });
});
