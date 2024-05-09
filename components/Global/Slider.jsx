import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = () => {
  return (
    <Carousel className="w-full h-fit rounded-md">
      <CarouselContent className="h-fit">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="w-full h-full p-0 rounded-md flex justify-center items-center"
          >
            {/* <img
              src="/200.jpg"
              alt="img"
              className="w-full h-fit object-cover object-center"
            /> */}
            <div className="w-full h-full">
              <h1 className="pl-3 text-center text-slate-600 font-bold text-4xl md:text-6xl">
                Slider 0{index + 1}
              </h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default Slider;
