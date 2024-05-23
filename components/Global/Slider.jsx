"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const Slider = ({ imgURL }) => {
  const options = { loop: true };
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnMouseEnter: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  const handleMouseEnter = useCallback(() => {
    autoplay.current.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isPlaying) {
      autoplay.current.play();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (emblaApi) {
      const container = emblaApi.rootNode();
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [emblaApi, handleMouseEnter, handleMouseLeave]);

  useEffect(() => {
    if (emblaApi) {
      if (isPlaying) {
        autoplay.current.play();
      } else {
        autoplay.current.stop();
      }
    }
  }, [emblaApi, isPlaying]);

  return (
    <>
      <div className="relative flex flex-col items-center w-full aspect-[10/4] lg:aspect-[10/3.5] rounded-md overflow-hidden mt-3">
        <div className="w-full h-full embla" ref={emblaRef}>
          <div className="w-full h-full embla__container">
            {imgURL ? (
              imgURL?.map((img, index) => (
                <Link
                  href={img.link}
                  className="w-full h-full embla__slide"
                  key={index}
                >
                  <Image
                    src={img.url}
                    alt={`Slider`}
                    width={2500}
                    height={2500}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="block w-full h-full pointer-events-none object-cover"
                  />
                </Link>
              ))
            ) : (
              <>
                <div className="bg-gray-300 w-full h-full animate-pulse"></div>
              </>
            )}
          </div>
        </div>
        {/* <div className="absolute bg-white bottom-0 px-1 flex justify-center items-center gap-2 h-5">
          <button className="w-3 h-3 rounded-full bg-black"></button>
          <button className="w-3 h-3 rounded-full bg-black"></button>
          <button className="w-3 h-3 rounded-full bg-black"></button>
        </div> */}
      </div>
    </>
  );
};

export default Slider;
