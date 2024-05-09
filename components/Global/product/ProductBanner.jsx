"use client";

import Image from "next/image";
import { Suspense, useState } from "react";

const ProductBanner = ({ data }) => {
  const imgs = data?.attributes?.images?.data;

  const [activeImg, setActiveImage] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-6 w-full lg:w-1/3 md:w-1/2">
        <Suspense
          fallback={
            <div className="w-full h-full aspect-square bg-gray-300 rounded-xl animate-pulse"></div>
          }
        >
          <Image
            src={data?.attributes?.images?.data[activeImg]?.attributes?.url}
            alt="img"
            className="w-full h-full aspect-square object-cover rounded-xl"
            width={1000}
            height={1000}
          />
        </Suspense>

        <div className="overflow-x-scroll">
          <div className="flex flex-row gap-5 w-full h-fit lg:h-24">
            <Suspense
              fallback={
                <>
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-md bg-gray-300 animate-pulse"></div>
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-md bg-gray-300 animate-pulse"></div>
                </>
              }
            >
              {imgs?.map((img, index) => (
                <Image
                  key={index}
                  src={img.attributes?.url}
                  alt="img"
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer border"
                  onClick={() => setActiveImage(index)}
                  width={500}
                  height={500}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
