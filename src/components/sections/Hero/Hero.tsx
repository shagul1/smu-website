import { FC } from "react";
import Button from "@/components/ui/Button";

export interface HeroProps {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
}

const Hero: FC<HeroProps> = ({ headline, subtext, ctaLabel, ctaHref }) => (
  <section
    className="relative bg-smu-blue text-white overflow-hidden"
    aria-label="Hero"
  >
    {/* Decorative gradient overlay */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, #1a4fa8 0%, transparent 70%)",
      }}
      aria-hidden="true"
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
      <div className="max-w-2xl">
        <p className="text-yellow-200 text-sm font-semibold uppercase tracking-widest mb-4">
          Southern Methodist University
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
          {subtext}
        </p>
        <Button href={ctaHref} variant="secondary" size="lg">
          {ctaLabel}
        </Button>
      </div>
    </div>

    {/* Bottom border accent */}
    <div className="h-1 bg-smu-red" aria-hidden="true" />
  </section>
);

export default Hero;
