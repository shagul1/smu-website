import { FC } from "react";
import Link from "next/link";

const footerColumns = [
  {
    heading: "Academics",
    links: [
      { label: "Cox School of Business", href: "/academics/cox" },
      { label: "Lyle School of Engineering", href: "/academics/lyle" },
      { label: "Dedman College", href: "/academics/dedman" },
      { label: "Meadows School of the Arts", href: "/academics/meadows" },
      { label: "Perkins School of Theology", href: "/academics/perkins" },
      { label: "Dedman School of Law", href: "/academics/law" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      { label: "Undergraduate", href: "/admission/undergraduate" },
      { label: "Graduate", href: "/admission/graduate" },
      { label: "Financial Aid", href: "/admission/financial-aid" },
      { label: "Visit Campus", href: "/admission/visit" },
    ],
  },
  {
    heading: "Research",
    links: [
      { label: "Research Centers", href: "/research/centers" },
      { label: "Faculty Experts", href: "/research/faculty" },
      { label: "Student Research", href: "/research/students" },
    ],
  },
  {
    heading: "About SMU",
    links: [
      { label: "History & Mission", href: "/about/mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Campus Map", href: "/about/campus-map" },
      { label: "Contact Us", href: "/about/contact" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/smudallas", icon: "F" },
  { label: "Instagram", href: "https://instagram.com/smudallas", icon: "I" },
  { label: "LinkedIn", href: "https://linkedin.com/school/smu", icon: "in" },
  { label: "YouTube", href: "https://youtube.com/smudallas", icon: "Y" },
  { label: "X (Twitter)", href: "https://x.com/smudallas", icon: "X" },
];

const Footer: FC = () => (
  <footer className="bg-smu-dark-blue text-white" role="contentinfo">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-200 mb-4">
              {col.heading}
            </h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-widest">SMU</span>
          <span className="text-gray-400 text-sm">Southern Methodist University</span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Southern Methodist University. Dallas, Texas 75275.
        All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
