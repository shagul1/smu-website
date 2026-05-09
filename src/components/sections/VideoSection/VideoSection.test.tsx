import { render, screen } from "@testing-library/react";
import VideoSection from "./VideoSection";

const props = { youtubeId: "UgbKBHSkMV0", title: "Welcome to SMU" };

describe("VideoSection", () => {
  it("renders the section heading", () => {
    render(<VideoSection {...props} />);
    expect(screen.getByRole("heading", { name: props.title })).toBeInTheDocument();
  });

  it("renders an iframe with the correct YouTube URL", () => {
    render(<VideoSection {...props} />);
    const iframe = screen.getByTitle(props.title);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      `https://www.youtube.com/embed/${props.youtubeId}`
    );
  });

  it("has the allowfullscreen attribute on the iframe", () => {
    render(<VideoSection {...props} />);
    expect(screen.getByTitle(props.title)).toHaveAttribute("allowfullscreen");
  });

  it("has a section landmark", () => {
    render(<VideoSection {...props} />);
    expect(screen.getByRole("region", { name: /campus video/i })).toBeInTheDocument();
  });
});
