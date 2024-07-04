// components/CarbonCreditCard.js
import Image from "next/image";

const CarbonCreditCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 md:m-4 border border-gray-200 bg-white flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.title}</div>
          <p className="text-gray-700 text-base">
            {project.region} | {project.registry}
          </p>
          <p className="text-gray-700 text-base mt-2">{project.description}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center border-t mt-auto">
        <span className="font-bold text-lg">USD {project.price}/tCO2e</span>
      </div>
    </div>
  );
};

export default CarbonCreditCard;
