import Image from "next/image";
import CarbonCreditCard from "@/components/CarbonCard";
import Header from "@/components/Header";

export default function CarbonCredits() {
  const projects = [
    {
      id: 1,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Katingan Peatland Restoration and Conservation",
      region: "Asia",
      registry: "Verra",
      description:
        "60-year REDD+ project in Indonesia designed to protect 150 kha of peat swamp forest from planned deforestation due to commercial plantations and logging. The project will also restore peat health by rewetting and...",
      price: "9.91",
    },
    {
      id: 2,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Delta Blue Carbon - 1",
      region: "Asia",
      registry: "Verra",
      description:
        "The Delta Blue Carbon Project is the largest coastal blue carbon project in the world, covering 350,000 hectares of tidal wetlands in the Indus Delta region of Sindh province in Pakistan.",
      price: "39",
    },
    {
      id: 3,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Prairie Pothole Avoided Conversion of Grasslands and Shrublands",
      region: "Americas",
      registry: "American Carbon Registry",
      description:
        "Wind sweeps almost continuously across the Dakotas, ruffling the prairie grass and the many ponds in North Dakota’s Prairie Pothole Region. The “potholes” are thousands of shallow wetlands created as the Ice Age glaciers...",
      price: "23.92",
    },
    {
      id: 4,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Katingan Peatland Restoration and Conservation",
      region: "Asia",
      registry: "Verra",
      description:
        "60-year REDD+ project in Indonesia designed to protect 150 kha of peat swamp forest from planned deforestation due to commercial plantations and logging. The project will also restore peat health by rewetting and...",
      price: "9.91",
    },
    {
      id: 5,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Delta Blue Carbon - 1",
      region: "Asia",
      registry: "Verra",
      description:
        "The Delta Blue Carbon Project is the largest coastal blue carbon project in the world, covering 350,000 hectares of tidal wetlands in the Indus Delta region of Sindh province in Pakistan.",
      price: "39",
    },
    {
      id: 6,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Prairie Pothole Avoided Conversion of Grasslands and Shrublands",
      region: "Americas",
      registry: "American Carbon Registry",
      description:
        "Wind sweeps almost continuously across the Dakotas, ruffling the prairie grass and the many ponds in North Dakota’s Prairie Pothole Region. The “potholes” are thousands of shallow wetlands created as the Ice Age glaciers...",
      price: "23.92",
    },
  ];

  return (
    <main className="bg-slate-100">
      {/* <Header /> */}
      <div className="flex items-center justify-center pt-4">
        <div className="w-full max-w-xs md:max-w-md">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-wrap justify-center ">
          {projects.map((project, index) => (
            <CarbonCreditCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
