"use client";

import Link from "next/link";

const courseSites = [
  {
    id: "unssc",
    name: "United Nations System Staff College (UNSSC)",
    url: "https://www.unssc.org/",
    description:
      "Executive education and learning for UN staff and partners on sustainable development and climate-related topics.",
  },
  {
    id: "upskill",
    name: "Upskill Training Center",
    url: "https://upskillcenter.org/",
    description:
      "Practical training programs focused on green skills, sustainable business and technical capacity building.",
  },
  {
    id: "uncclearn",
    name: "UN CC:Learn",
    url: "https://unccelearn.org/",
    description:
      "Global hub for climate change learning that provides free online courses and learning resources.",
  },
  {
    id: "bioversity",
    name: "Alliance of Bioversity International & CIAT",
    url: "https://www.bioversityinternational.org/",
    description:
      "Research and training on biodiversity, agriculture and climate-resilient landscapes.",
  },
  {
    id: "climatebonds",
    name: "Climate Bonds Initiative - Training",
    url: "https://www.climatebonds.net/training",
    description:
      "Training and resources on green finance, climate bonds and sustainable investment.",
  },
  {
    id: "worldbank-olc",
    name: "World Bank Open Learning (OLC)",
    url: "https://olc.worldbank.org/",
    description:
      "Open Learning Campus offering courses on climate finance, adaptation and development topics.",
  },
  {
    id: "ifc",
    name: "IFC (International Finance Corporation)",
    url: "https://www.ifc.org/",
    description:
      "Private sector development and finance guidance including climate-smart investment and advisory services.",
  },
  {
    id: "southpole",
    name: "South Pole Group",
    url: "https://www.southpole.com/",
    description:
      "Provider of climate solutions, carbon markets services and training on mitigation projects.",
  },
  {
    id: "verra",
    name: "Verra - Training",
    url: "https://verra.org/training/",
    description:
      "Courses and resources on carbon standards, certification and project development.",
  },
  {
    id: "giz",
    name: "GIZ",
    url: "https://www.giz.de/en/html/index.html",
    description:
      "International cooperation agency offering training and programs on energy, climate and sustainable development.",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Climate & Clean Energy Courses
          </h1>
          <p className="mt-2 text-gray-600">
            Curated learning resources and training providers that offer courses
            on climate change, clean energy technologies, carbon markets and
            sustainable development. Click through to visit each provider's
            training or learning pages.
          </p>
        </header>

        <section className="grid sm:grid-cols-2 gap-4">
          {courseSites.map((site) => (
            <article
              key={site.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {site.name}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{site.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-700 hover:underline"
                >
                  Visit site
                </a>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white px-3 py-1 rounded text-sm"
                >
                  Open
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
