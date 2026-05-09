import { render, screen } from "@testing-library/react";
import QuickLinks from "./QuickLinks";

const items = [
  { title: "Undergraduate Admission", description: "Start your journey.", href: "/admission/undergraduate" },
  { title: "Graduate Programs", description: "Advance your career.", href: "/admission/graduate" },
  { title: "Research Opportunities", description: "Cutting-edge research.", href: "/research" },
];

describe("QuickLinks", () => {
  it("renders all quick link titles", () => {
    render(<QuickLinks items={items} />);
    items.forEach((item) => expect(screen.getByText(item.title)).toBeInTheDocument());
  });

  it("renders all descriptions", () => {
    render(<QuickLinks items={items} />);
    items.forEach((item) => expect(screen.getByText(item.description)).toBeInTheDocument());
  });

  it("renders each card as a link", () => {
    render(<QuickLinks items={items} />);
    items.forEach((item) => {
      const link = screen.getByRole("link", { name: new RegExp(item.title, "i") });
      expect(link).toHaveAttribute("href", item.href);
    });
  });

  it("has a section landmark", () => {
    render(<QuickLinks items={items} />);
    expect(screen.getByRole("region", { name: /quick links/i })).toBeInTheDocument();
  });
});
