import Image from "next/image";
import PurchaseCarbon from "@/components/PurchaseCarbon";
import projectsData from "@/data/projectData.json";

// This function provides the dynamic paths for static generation
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectPage = ({ params }) => {
  const project = projectsData.find(
    (project) => project.id.toString() === params.id
  );

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 bg-white">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          {project.type == "forest" ? project.title : project.name}
        </h1>
        <div className="relative h-64 w-full mb-4">
          <Image
            src={project.type == "forest" ? project.imageUrl : project.logo}
            alt={project.type == "forest" ? project.title : project.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-gray-700 text-base">
          <strong>Region:</strong>{" "}
          {project.type == "forest" ? project.region : project.location}
        </p>
        <p className="text-gray-700 text-base">
          {project.type == "forest" ? (
            <div>
              {" "}
              <strong>Registry:</strong> {project.registry}
            </div>
          ) : (
            <div>
              {" "}
              <strong>Website:</strong> {project.website}
            </div>
          )}
        </p>
        <p className="text-gray-700 text-base mt-4">{project.description}</p>
        <p className="text-gray-700 text-base mt-4">
          {project.type == "forest" ? (
            <div>
              {" "}
              <strong>Price:</strong> USD {project.price}/tCO2e
            </div>
          ) : (
            <div>
              {" "}
              <strong>Offerings:</strong>
              {project.offerings}
            </div>
          )}
        </p>
      </div>
      <div>
        {project.type == "forest" ? (
          <PurchaseCarbon
            carbonPrice={project.price}
            providerName={project.title}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProjectPage;
