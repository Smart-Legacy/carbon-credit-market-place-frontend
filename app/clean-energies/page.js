"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function CleanEnergies() {
  // Provider data structure: id, name, category, location, logo, website, description, offerings[], impact (tCO2 saved/year)
  const providers = [
    {
      id: "p-solar-01",
      name: "SunRise Solar Ltd",
      category: "Solar",
      location: "Addis Ababa, Ethiopia",
      logo: "https://plus.unsplash.com/premium_photo-1678743133509-a15141e416c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
      website: "https://sunrisesolar.example.com",
      description:
        "SunRise Solar provides residential and commercial solar PV installations with end-to-end financing and performance warranties.",
      offerings: ["Rooftop Solar", "Off-grid Kits", "BESS Integration"],
      impactTonsPerYear: 1200,
    },
    {
      id: "p-ev-01",
      name: "EcoDrive Vehicles",
      category: "E-Mobility",
      location: "Addis Ababa, Ethiopia",
      logo: "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1665",
      website: "https://ecodrive.example.com",
      description:
        "EcoDrive sells electric vehicles (EVs) and e-bikes tailored for African urban and peri-urban mobility, with financing and fleet solutions.",
      offerings: ["EVs", "E-bikes", "Fleet Leasing"],
      impactTonsPerYear: 950,
    },
    {
      id: "p-storage-01",
      name: "GridShield Energy",
      category: "Energy Storage",
      location: "Addis Ababa, Ethiopia",
      logo: "https://plus.unsplash.com/premium_photo-1681433401553-589104846604?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2060",
      website: "https://gridshield.example.com",
      description:
        "GridShield builds modular battery energy storage systems (BESS) for industrial customers that enable renewable integration and peak shaving.",
      offerings: ["BESS", "SCADA Integration", "Maintenance"],
      impactTonsPerYear: 760,
    },
    {
      id: "p-eff-01",
      name: "EfficaTech",
      category: "Efficiency",
      location: "Addis Ababa, Ethiopia",
      logo: "https://images.unsplash.com/photo-1532007271951-c487760934ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
      website: "https://efficatech.example.com",
      description:
        "EfficaTech delivers energy efficiency retrofits, LED lighting programs and industrial audits that drive long-term reductions in energy use.",
      offerings: ["Retrofits", "Lighting", "Audits"],
      impactTonsPerYear: 430,
    },
  ];

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(providers.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    return providers.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.offerings.join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [providers, category, query]);

  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Clean Energy Providers
          </h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Explore verified clean energy companies offering solar PV systems,
            electric vehicles, battery storage, and efficiency services. These
            providers help reduce emissions by deploying low-carbon technologies
            and improving energy performance across homes, businesses, and
            fleets.
          </p>
        </header>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 w-full md:w-1/2">
            <input
              aria-label="Search providers"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search providers, offerings or location..."
              className="w-full px-4 py-2 rounded-md border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 border rounded"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {p.name}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {p.location} •{" "}
                    <span className="font-medium text-green-700">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-700 font-semibold">
                    {p.impactTonsPerYear} tCO₂/yr
                  </div>
                  <div className="text-xs text-gray-500">estimated</div>
                </div>
              </div>

              <p className="text-sm text-gray-700 mt-3 flex-1">
                {p.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Offerings:{" "}
                  <span className="font-medium text-gray-800">
                    {p.offerings.join(", ")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={p.website}
                    target="_blank"
                    className="text-sm text-green-700 hover:underline"
                  >
                    Website
                  </Link>
                  <Link
                    href={`/project/${p.id}`}
                    className="px-3 py-1 bg-green-700 text-white rounded text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
