"use client";
import Image from "next/image";
import { useState } from "react";

const Slider10 = () => {
  const imgURL = ["/200.jpg", "/300.png", "/400.jpg", "/500.jpg"];
  const [imgIndx, setImgIndx] = useState(0);

  const showNextIMG = () => {
    setImgIndx((i) => {
      if (i === imgURL.length - 1) return 0;
      return i + 1;
    });
  };
  const showPrevIMG = () => {
    setImgIndx((i) => {
      if (i === 0) return imgURL.length - 1;
      return i - 1;
    });
  };

  return (
    <>
      <div className="w-full aspect-[10/4] lg:aspect-[10/3] rounded-md overflow-hidden mt-3">
        <div className="w-full h-full">
          <div className="w-full h-full flex overflow-hidden">
            {imgURL?.map((img) => (
              <Image
                key={img}
                src={img}
                alt="slider"
                width={2500}
                height={2500}
                className="block w-full h-full pointer-events-none object-cover flex-shrink-0 flex-grow-0 animate-slide"
                style={{ translate: `${-100 * imgIndx}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 text-sm mt-5">
        <button
          onClick={showPrevIMG}
          className="bg-gray-700 rounded p-2 text-white"
        >
          PREV
        </button>
        <button
          onClick={showNextIMG}
          className="bg-gray-700 rounded p-2 text-white"
        >
          NEXT
        </button>
      </div>
    </>
  );
};
export default Slider10;
