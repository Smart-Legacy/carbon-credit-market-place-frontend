// pages/news/index.tsx

import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "Green Carbon Solution Launches New Initiative",
    summary:
      "We are excited to announce our new initiative focused on expanding our carbon offset projects globally.",
    date: "2024-07-01",
  },
  {
    id: 2,
    title: "Successful Completion of Delta Blue Carbon Project",
    summary:
      "Our Delta Blue Carbon Project has successfully been completed, achieving significant carbon offset targets.",
    date: "2024-06-15",
  },
  {
    id: 3,
    title: "Partnership with Global Environmental Fund",
    summary:
      "We have partnered with the Global Environmental Fund to boost our efforts in carbon credit trading.",
    date: "2024-06-05",
  },
];

const News = () => {
  return (
    <div className="p-4 bg-white md:px-32">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <div className="space-y-4">
        {newsData.map((news) => (
          <div key={news.id} className="p-4 border rounded shadow-lg">
            <h2 className="text-xl font-bold">{news.title}</h2>
            <p className="text-gray-500">{news.date}</p>
            <p className="mt-2">{news.summary}</p>
            <Link
              className="text-green-600 underline mt-2 inline-block"
              href={`/news/${news.id}`}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
