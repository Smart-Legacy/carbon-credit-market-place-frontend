import Image from "next/image";
import PurchaseCarbon from "@/components/PurchaseCarbon";

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

// This function provides the dynamic paths for static generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectPage = ({ params }) => {
  const project = projects.find(
    (project) => project.id.toString() === params.id
  );

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 bg-white">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          {project.title}
        </h1>
        <div className="relative h-64 w-full mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-gray-700 text-base">
          <strong>Region:</strong> {project.region}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Registry:</strong> {project.registry}
        </p>
        <p className="text-gray-700 text-base mt-4">{project.description}</p>
        <p className="text-gray-700 text-base mt-4">
          <strong>Price:</strong> USD {project.price}/tCO2e
        </p>
      </div>
      <div>
        <PurchaseCarbon
          carbonPrice={project.price}
          providerName={project.title}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
