import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ item }) => {
  return (
    <>
      <Link
        href={`/product-details/${item.id}`}
        className="sm:hover:scale-105 sm:duration-500"
      >
        <div className="m-2 relative bg-slate-50 rounded-lg w-72 shadow-lg border">
          <div className="relative pt-5 px-3 flex items-center justify-center">
            {item?.attributes?.images?.data[0]?.attributes?.url ? (
              <Image
                src={item?.attributes?.images?.data[0]?.attributes?.url}
                width={192}
                height={192}
                alt="product"
                loading={"lazy"} // check this out
                className="relative w-48 object-cover object-center rounded aspect-square"
              />
            ) : (
              <>
                <div className="w-52 h-48 bg-gray-300/80 rounded-lg animate-pulse"></div>
              </>
            )}
          </div>
          <div className="relative text-slate-900 px-6 pb-3 mt-6">
            <div className="flex flex-col justify-between">
              <p className="font-medium text-xl line-clamp-2 h-14">
                {item.attributes.title}
              </p>

              <div className="">
                <span className="block text-slate-400 text-sm font-bold line-through pt-2 leading-none items-center ">
                  12000.00 DA
                </span>
                <span className="block text-slate-950 text-xl font-bold pb-2 leading-none items-center mb-1">
                  {item.attributes.price}.00 DA
                </span>
              </div>
            </div>
          </div>
          <div className="absolute z-10 top-4 left-4 flex gap-2 flex-wrap">
            <Badge
              className={`bg-[#ff0000] hover:bg-red-500 font-semibold  ${
                item?.attributes?.isOutStock ? "" : "hidden"
              }`}
            >
              OUT OF STOCK
            </Badge>
            <Badge
              className={`bg-[#249446] hover:bg-green-500 font-semibold  ${
                item?.attributes?.isOutStock ? "" : "hidden"
              }`}
            >
              NEW
            </Badge>
            <Badge
              className={`bg-[#ffe81a] hover:bg-yellow-400 text-black font-semibold  ${
                item?.attributes?.isOutStock ? "" : "hidden"
              }`}
            >
              27%
            </Badge>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
