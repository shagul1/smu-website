import { FC } from "react";

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  backgroundImage,
  backgroundImageAlt = "",
}) => (
  <section
    className="relative overflow-hidden"
    style={{ height: "384px" }}
    aria-label="Hero"
  >
    {backgroundImage ? (
      <img
        src={backgroundImage}
        alt={backgroundImageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    ) : (
      <div
        className="absolute inset-0 bg-smu-blue"
        style={{
          background: "linear-gradient(135deg, #001f5b 0%, #003087 60%, #1a4fa8 100%)",
        }}
        aria-hidden="true"
        data-testid="hero-placeholder"
      />
    )}

    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-white mb-8 drop-shadow">
        {subtitle}
      </p>
      <a
        href={ctaHref}
        className="inline-block px-6 py-3 bg-smu-red text-white font-semibold hover:opacity-90 transition-opacity"
      >
        {ctaLabel}
      </a>
    </div>
  </section>
);

export default Hero;
