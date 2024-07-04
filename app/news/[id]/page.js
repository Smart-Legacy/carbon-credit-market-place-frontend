"use client";

import { useRouter } from "next/navigation";

const newsData = [
  {
    id: 1,
    title: "Green Carbon Solution Launches New Initiative",
    summary:
      "We are excited to announce our new initiative focused on expanding our carbon offset projects globally.",
    content: "Full content about the new initiative goes here...",
    date: "2024-07-01",
  },
  {
    id: 2,
    title: "Successful Completion of Delta Blue Carbon Project",
    summary:
      "Our Delta Blue Carbon Project has successfully been completed, achieving significant carbon offset targets.",
    content: "Full content about the Delta Blue Carbon Project goes here...",
    date: "2024-06-15",
  },
  {
    id: 3,
    title: "Partnership with Global Environmental Fund",
    summary:
      "We have partnered with the Global Environmental Fund to boost our efforts in carbon credit trading.",
    content:
      "Full content about the partnership with Global Environmental Fund goes here...",
    date: "2024-06-05",
  },
];

const NewsDetail = ({ params }) => {
  const router = useRouter();
  //const { id } = router.query;
  const newsItem = newsData.find((news) => news.id === parseInt(params.id));

  if (!newsItem) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
      <p className="text-gray-500">{newsItem.date}</p>
      <p className="mt-4">{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
