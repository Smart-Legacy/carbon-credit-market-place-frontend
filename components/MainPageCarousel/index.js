"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";

const responsive = [
  {
    id: 1,
    title: "Explore the Carbon Credit Market",
    text: "Discover various carbon credit projects and invest in sustainable initiatives.",
    link: "/market",
    imageUrl: "/bg1.png",
  },
  {
    id: 2,
    title: "Contact Us",
    text: "Get in touch with our team for more information on carbon credits and sustainable investments.",
    link: "/contact",
    imageUrl: "/bg2.png",
  },
  {
    id: 3,
    title: "Work with Us",
    text: "Join our team and contribute to a greener future through carbon credit projects.",
    link: "/careers",
    imageUrl: "/bg3.png",
  },
];

const MainPageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {responsive.map((item) => (
        <div
          key={item.id}
          className="relative h-[280px] md:h-[440px] lg:h-[540px] cursor-grab w-full"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute top-8 md:top-32 left-0 p-4 md:p-6 lg:p-8 md:ml-8 text-green-900  w-3/5 md:w-2/5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {item.title}
            </h2>
            <h2 className="text-md md:text-lg lg:text-xl font-bold text-green-900">
              {item.text}
            </h2>

            <Link
              href={item.link}
              className="inline-block mt-2 bg-green-900 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Go To
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MainPageCarousel;
