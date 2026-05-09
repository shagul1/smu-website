import { FC } from "react";
import Card from "@/components/ui/Card";

export interface QuickLink {
  title: string;
  description: string;
  href: string;
}

export interface QuickLinksProps {
  items: QuickLink[];
}

const QuickLinks: FC<QuickLinksProps> = ({ items }) => (
  <section className="bg-smu-light-gray py-16" aria-label="Quick links">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.href} href={item.href} elevated>
            <div className="p-8">
              <h2 className="text-xl font-bold text-smu-blue mb-3">{item.title}</h2>
              <p className="text-smu-text leading-relaxed mb-4">{item.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-smu-red gap-1">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default QuickLinks;
