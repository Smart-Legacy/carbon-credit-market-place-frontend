import Image from "next/image";
import PurchaseCarbon from "@/components/PurchaseCarbon";

const projects = [
  {
    id: 1,
    imageUrl:
      "https://th.bing.com/th/id/R.271bad34bd84bfe418422b6cbebdb86f?rik=A7LC%2fftNatpgXQ&pid=ImgRaw&r=0",
    title: "Harenna Forest",
    region: "Ethiopia / Sothern Sopes of Bale Mountain",
    registry: "Verra",
    description:
      "The Harenna Forest is an enchanting place. Its not only the second-largest stand of moist tropical forest in Ethiopia but also the largest cloud forest in the country. Imagine mist-shrouded trees, lush greenery, and a sense of mystery hanging in the air.",
    price: "9.91",
  },
  {
    id: 2,
    imageUrl:
      "https://th.bing.com/th/id/R.4e048c3b4f81e58400066518b3128de8?rik=iKk2jq6C4L6smw&pid=ImgRaw&r=0",
    title: "Gura Ferda Forest",
    region: "Ethiopia /  Near the South Sudanese border",
    registry: "Verra",
    description:
      "The forest is dripping with biodiversity. Epiphytes cling to trees, and a rich array of animal species roam its depths—black and white colobus monkeys, leopards, mongoose, and more. Its like a symphony of life echoing through the green canopy.",
    price: "39",
  },
  {
    id: 3,
    imageUrl:
      "https://th.bing.com/th/id/R.e784de279e9a298627757eea2290becf?rik=pJgmTAYy9WnWWw&pid=ImgRaw&r=0",
    title: "Entoto National Park",
    region: "Ethiopia / Addis Ababa",
    registry: "Gold Standard",
    description:
      "Entoto Natural Park (Amharic: እንጦጦ ፓርክ) is an natural park located northeast of Addis Ababa, Ethiopia on the southeastern slopes of Mount Entoto, covering an area of 1,300 hectares. It is situated at an altitude of between 2,600 and 3,100 meters.",
    price: "23.92",
  },
  {
    id: 4,
    imageUrl:
      "https://th.bing.com/th/id/R.2467c1b4946182a2654f698b86645d82?rik=Sz%2bb3gHcmuUZ7A&pid=ImgRaw&r=0",
    title: "Nechisar National Park",
    region: "Ethiopia / Arba Minch",
    registry: "Verra",
    description:
      "Nechisar National Park, spanning the narrow yet mountainous “Bridge of God” between Lake Chamo and Lake Abaya, is a haven for wildlife. Here, you might spot monkeys, springs, and even surviving herds of Swaynes hartebeest roaming the savannah alongside zebras and Grant gazelles",
    price: "9.91",
  },
  {
    id: 5,
    imageUrl:
      "https://th.bing.com/th/id/OIP.Bh4FJumqsk_OG1hWJGQkmQHaE7?rs=1&pid=ImgDetMain",
    title: "Yayu Biosphere Reserve",
    region: "Ethiopia / Illubabor",
    registry: "Verra",
    description:
      "It is the center of origin for the most popular coffee in the world, Coffea arabica.Yayu is the largest and most important forest in the world for the conservation of the wild coffee populations.",
    price: "39",
  },
  {
    id: 6,
    imageUrl:
      "https://th.bing.com/th/id/OIP.mW14F3VcGagOR_0e4dGGBgHaEK?rs=1&pid=ImgDetMain",
    title: "Semien Mountain National Park",
    region: "Ethiopia / Amhara Regional State",
    registry: "Gold Standard",
    description:
      "The SMNP, after being recommended by the UNESCO mission in 1965, was formally established by 1966 and gazetted in 1966. Due to its unique landscape and the rich biodiversity resources, the park was listed on the list of World Natural Heritage by UNESCO in 1978.",
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
