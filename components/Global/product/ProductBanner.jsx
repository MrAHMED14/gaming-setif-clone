"use client";

import Image from "next/image";
import { useState } from "react";

const ProductBanner = ({ data }) => {
  const imgs = data?.attributes?.images?.data;
  console.log(imgs);

  const [activeImg, setActiveImage] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-6 lg:w-[30%]">
        <Image
          src={data?.attributes?.images?.data[activeImg]?.attributes?.url}
          alt="img"
          className="w-full h-full aspect-square object-cover rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="overflow-x-scroll">
          <div className="flex flex-row gap-5 w-full h-fit lg:h-24">
            {imgs.map((img, index) => (
              <Image
                key={index}
                src={img.attributes?.url}
                alt="img"
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(index)}
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
