import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ item }) => {
  return (
    <>
      <Link
        href={`/product-details/${item.id}`}
        className="sm:hover:scale-110 sm:duration-500"
      >
        <div className="flex-shrink-0 m-2 relative overflow-hidden bg-slate-50 rounded-lg max-w-xs shadow-lg border">
          <div className="relative pt-5 px-3 flex items-center justify-center">
            {item.attributes.images.data[0].attributes.url ? (
              <Image
                src={item?.attributes?.images?.data[0]?.attributes?.url}
                width={192}
                height={192}
                alt="product"
                className="relative w-48 object-cover object-center rounded "
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
              <span className="block text-slate-950 text-xl font-bold py-2 leading-none items-center mb-1">
                {item.attributes.price}.00 DA
              </span>
            </div>
          </div>
          <Badge
            className={`bg-[#ff0000] font-semibold absolute z-10 top-4 left-4 ${
              item?.attributes?.isOutStock ? "" : "hidden"
            }`}
          >
            OUT OF STOCK
          </Badge>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
