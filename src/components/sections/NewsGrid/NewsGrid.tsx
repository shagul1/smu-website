import { FC } from "react";
import Link from "next/link";

export interface NewsArticle {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  href: string;
}

export interface NewsGridProps {
  articles: NewsArticle[];
}

const categoryColors: Record<string, string> = {
  "Student Life": "bg-blue-100 text-blue-800",
  Research: "bg-green-100 text-green-800",
  "Arts & Culture": "bg-purple-100 text-purple-800",
  Rankings: "bg-yellow-100 text-yellow-800",
};

const NewsGrid: FC<NewsGridProps> = ({ articles }) => (
  <section className="bg-white py-16" aria-label="Latest news">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-smu-blue">Latest News</h2>
        <Link
          href="/news"
          className="text-sm font-semibold text-smu-red hover:underline"
        >
          View all news →
        </Link>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
        {articles.map((article) => (
          <li key={article.href}>
            <Link href={article.href} className="group block h-full">
              <article className="h-full flex flex-col rounded-lg overflow-hidden border border-smu-border hover:border-smu-blue hover:shadow-md transition-all">
                {/* Image placeholder */}
                <div
                  className="h-48 bg-smu-light-gray flex items-center justify-center"
                  role="img"
                  aria-label={article.title}
                >
                  <span className="text-4xl text-smu-border">📰</span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-3 ${
                      categoryColors[article.category] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {article.category}
                  </span>
                  <h3 className="font-semibold text-smu-text group-hover:text-smu-blue transition-colors leading-snug mb-3 flex-1">
                    {article.title}
                  </h3>
                  <time
                    dateTime={article.date}
                    className="text-xs text-gray-500"
                  >
                    {new Date(`${article.date}T12:00:00`).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default NewsGrid;
