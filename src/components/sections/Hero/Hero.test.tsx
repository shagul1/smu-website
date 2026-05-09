import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

const baseProps = {
  title: "MUSTANGS MAKE COLLEGE INTERNSHIPS COUNT",
  subtitle: "A top private research university in the heart of Dallas.",
  ctaLabel: "Explore Opportunities",
  ctaHref: "/academics",
};

describe("Hero", () => {
  it("renders the title as an h1", () => {
    render(<Hero {...baseProps} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(baseProps.title);
  });

  it("renders the subtitle", () => {
    render(<Hero {...baseProps} />);
    expect(screen.getByText(baseProps.subtitle)).toBeInTheDocument();
  });

  it("renders the CTA link with correct href", () => {
    render(<Hero {...baseProps} />);
    expect(screen.getByRole("link", { name: baseProps.ctaLabel })).toHaveAttribute(
      "href",
      baseProps.ctaHref
    );
  });

  it("has a section landmark", () => {
    render(<Hero {...baseProps} />);
    expect(screen.getByRole("region", { name: /hero/i })).toBeInTheDocument();
  });

  it("shows a placeholder when no backgroundImage is provided", () => {
    render(<Hero {...baseProps} />);
    expect(screen.getByTestId("hero-placeholder")).toBeInTheDocument();
  });

  it("renders the background image when backgroundImage is provided", () => {
    render(<Hero {...baseProps} backgroundImage="/images/hero.jpg" backgroundImageAlt="Campus view" />);
    const img = screen.getByAltText("Campus view");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/hero.jpg");
  });

  it("does not show the placeholder when a backgroundImage is provided", () => {
    render(<Hero {...baseProps} backgroundImage="/images/hero.jpg" />);
    expect(screen.queryByTestId("hero-placeholder")).not.toBeInTheDocument();
  });
});
