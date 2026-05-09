import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

const props = {
  headline: "MUSTANGS MAKE COLLEGE INTERNSHIPS COUNT",
  subtext: "A top private research university in the heart of Dallas.",
  ctaLabel: "Explore Opportunities",
  ctaHref: "/academics",
};

describe("Hero", () => {
  it("renders the headline", () => {
    render(<Hero {...props} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(props.headline);
  });

  it("renders the subtext", () => {
    render(<Hero {...props} />);
    expect(screen.getByText(props.subtext)).toBeInTheDocument();
  });

  it("renders the CTA link with correct href", () => {
    render(<Hero {...props} />);
    expect(screen.getByRole("link", { name: props.ctaLabel })).toHaveAttribute(
      "href",
      props.ctaHref
    );
  });

  it("has a section landmark", () => {
    render(<Hero {...props} />);
    expect(screen.getByRole("region", { name: /hero/i })).toBeInTheDocument();
  });
});
