import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header", () => {
  it("renders the SMU logo link", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /smu home/i })).toBeInTheDocument();
  });

  it("renders all desktop navigation links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Academics" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Research" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "News" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About SMU" })).toBeInTheDocument();
  });

  it("renders a search button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("renders a skip-to-content link", () => {
    render(<Header />);
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument();
    await user.click(toggle);
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
  });

  it("closes mobile menu when a nav link is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByRole("button", { name: /open menu/i }));
    const mobileNav = screen.getByRole("navigation", { name: /mobile navigation/i });
    await user.click(mobileNav.querySelector("a")!);
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
  });
});
