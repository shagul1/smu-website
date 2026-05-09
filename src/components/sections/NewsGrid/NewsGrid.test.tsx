import { render, screen } from "@testing-library/react";
import NewsGrid from "./NewsGrid";

const articles = [
  { title: "Internships Count", date: "2026-05-01", category: "Student Life", imageUrl: "", href: "/news/internships" },
  { title: "Carbon Capture", date: "2026-04-28", category: "Research", imageUrl: "", href: "/news/carbon" },
];

describe("NewsGrid", () => {
  it("renders the section heading", () => {
    render(<NewsGrid articles={articles} />);
    expect(screen.getByRole("heading", { name: /latest news/i })).toBeInTheDocument();
  });

  it("renders all article titles", () => {
    render(<NewsGrid articles={articles} />);
    articles.forEach((a) => expect(screen.getByText(a.title)).toBeInTheDocument());
  });

  it("renders each article as a link", () => {
    render(<NewsGrid articles={articles} />);
    articles.forEach((a) => {
      expect(screen.getByRole("link", { name: new RegExp(a.title, "i") })).toHaveAttribute(
        "href",
        a.href
      );
    });
  });

  it("renders category badges", () => {
    render(<NewsGrid articles={articles} />);
    expect(screen.getByText("Student Life")).toBeInTheDocument();
    expect(screen.getByText("Research")).toBeInTheDocument();
  });

  it("renders formatted dates", () => {
    render(<NewsGrid articles={articles} />);
    expect(screen.getByText(/may 1, 2026/i)).toBeInTheDocument();
  });

  it("has a 'View all news' link", () => {
    render(<NewsGrid articles={articles} />);
    expect(screen.getByRole("link", { name: /view all news/i })).toHaveAttribute("href", "/news");
  });

  it("has a section landmark", () => {
    render(<NewsGrid articles={articles} />);
    expect(screen.getByRole("region", { name: /latest news/i })).toBeInTheDocument();
  });
});
