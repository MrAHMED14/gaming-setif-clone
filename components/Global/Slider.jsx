import Image from "next/image";

const Slider = () => {
  return (
    <>
      <div className="w-full aspect-[21/9] min-h-36 md:h-96 rounded-md overflow-hidden flex items-center justify-center mt-3">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <Image
            src={"/500.jpg"}
            alt="slider"
            width={2500}
            height={2500}
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default Slider;
