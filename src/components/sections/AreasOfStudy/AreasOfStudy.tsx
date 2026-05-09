import { FC } from "react";
import Link from "next/link";

export interface StudyArea {
  title: string;
  href: string;
}

export interface AreasOfStudyProps {
  areas: StudyArea[];
}

const AreasOfStudy: FC<AreasOfStudyProps> = ({ areas }) => (
  <section className="py-16 bg-white" aria-label="Areas of study">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-smu-blue mb-2">Areas of Study</h2>
      <p className="text-smu-text mb-10">
        Explore more than 200 degree programs across eight world-class schools.
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" role="list">
        {areas.map((area) => (
          <li key={area.href}>
            <Link
              href={area.href}
              className="flex items-center gap-2 p-4 rounded-lg border border-smu-border hover:border-smu-blue hover:bg-smu-light-gray transition-colors group"
            >
              <span className="w-2 h-2 rounded-full bg-smu-red flex-shrink-0 group-hover:bg-smu-blue transition-colors" aria-hidden="true" />
              <span className="text-sm font-medium text-smu-text group-hover:text-smu-blue transition-colors">
                {area.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AreasOfStudy;
