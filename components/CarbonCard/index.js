"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const CarbonCreditCard = ({ project }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/project/${project.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 md:m-4 border border-gray-200 bg-white flex flex-col justify-between hover:border-green-600 hover:shadow-2xl hover:cursor-pointer"
    >
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
          <div className="font-bold text-xl text-green-800 mb-2 hover:underline hover:underline-offset-1">
            {project.title}
          </div>
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
