"use client";
import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const EmblaCarousel = () => {
  const options = { loop: true };
  const slides = Array.from(Array(5).keys());
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplay = useRef(Autoplay({ delay: 1000, stopOnMouseEnter: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  useEffect(() => {
    if (emblaApi) {
      const handleMouseEnter = () => {
        autoplay.current.stop();
      };

      const handleMouseLeave = () => {
        if (isPlaying) {
          autoplay.current.play();
        }
      };

      const container = emblaApi.rootNode();
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [emblaApi, isPlaying]);

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
    <section className="w-full bg-black text-white rounded-md aspect-[21/9] min-h-36 md:h-96">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex justify-center items-center">
          {slides.map((index) => (
            <Image
              key={index}
              src={"/500.jpg"}
              width={3000}
              height={2500}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
