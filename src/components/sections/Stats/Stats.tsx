import { FC } from "react";

export interface Stat {
  value: string;
  label: string;
  source: string;
}

export interface StatsProps {
  stats: Stat[];
}

const Stats: FC<StatsProps> = ({ stats }) => (
  <section className="bg-smu-blue text-white py-16" aria-label="Key statistics">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold mb-12">You Belong Here</h2>
      <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/10 rounded-xl p-8 border border-white/20"
          >
            <dt className="text-5xl font-bold text-yellow-200 mb-2">{stat.value}</dt>
            <dd className="text-xl font-semibold mb-1">{stat.label}</dd>
            {stat.source && (
              <p className="text-sm text-blue-200 mt-1">{stat.source}</p>
            )}
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Stats;
