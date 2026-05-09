import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card><p>Card content</p></Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders as a div when no href is provided", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("renders as a link when href is provided", () => {
    render(<Card href="/research">Research</Card>);
    expect(screen.getByRole("link", { name: "Research" })).toHaveAttribute("href", "/research");
  });

  it("applies elevated shadow class when elevated is true", () => {
    const { container } = render(<Card elevated>Content</Card>);
    expect(container.firstChild).toHaveClass("shadow-md");
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
