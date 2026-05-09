import { render, screen } from "@testing-library/react";
import Stats from "./Stats";

const stats = [
  { value: "#56", label: "National Universities", source: "U.S. News & World Report" },
  { value: "1 in 3", label: "Students Receive Need-Based Aid", source: "" },
  { value: "6,000+", label: "Research Partnerships", source: "Dallas–Fort Worth" },
];

describe("Stats", () => {
  it("renders the section heading", () => {
    render(<Stats stats={stats} />);
    expect(screen.getByRole("heading", { name: /you belong here/i })).toBeInTheDocument();
  });

  it("renders all stat values", () => {
    render(<Stats stats={stats} />);
    stats.forEach((s) => expect(screen.getByText(s.value)).toBeInTheDocument());
  });

  it("renders all stat labels", () => {
    render(<Stats stats={stats} />);
    stats.forEach((s) => expect(screen.getByText(s.label)).toBeInTheDocument());
  });

  it("renders source text when provided", () => {
    render(<Stats stats={stats} />);
    expect(screen.getByText("U.S. News & World Report")).toBeInTheDocument();
    expect(screen.getByText("Dallas–Fort Worth")).toBeInTheDocument();
  });

  it("does not render source paragraph when source is empty", () => {
    render(<Stats stats={[{ value: "1 in 3", label: "Students", source: "" }]} />);
    // Only one dd element, no source paragraph
    const dds = screen.getAllByRole("term");
    expect(dds).toHaveLength(1);
  });

  it("uses a description list for accessibility", () => {
    render(<Stats stats={stats} />);
    expect(screen.getAllByRole("term")).toHaveLength(stats.length);
    expect(screen.getAllByRole("definition")).toHaveLength(stats.length);
  });
});
