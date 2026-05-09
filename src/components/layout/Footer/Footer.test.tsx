import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the SMU wordmark", () => {
    render(<Footer />);
    expect(screen.getByText("SMU")).toBeInTheDocument();
  });

  it("renders all column headings", () => {
    render(<Footer />);
    expect(screen.getByText("Academics")).toBeInTheDocument();
    expect(screen.getByText("Admissions")).toBeInTheDocument();
    expect(screen.getByText("Research")).toBeInTheDocument();
    expect(screen.getByText("About SMU")).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /youtube/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /x \(twitter\)/i })).toBeInTheDocument();
  });

  it("renders social links with target _blank and rel noopener", () => {
    render(<Footer />);
    const fbLink = screen.getByRole("link", { name: /facebook/i });
    expect(fbLink).toHaveAttribute("target", "_blank");
    expect(fbLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders copyright notice with current year", () => {
    render(<Footer />);
    const year = String(new Date().getFullYear());
    // The copyright paragraph contains both the year and the university name
    const copyright = screen.getByText(new RegExp(`${year}.*Southern Methodist University`, "i"));
    expect(copyright).toBeInTheDocument();
  });

  it("has a contentinfo landmark role", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
