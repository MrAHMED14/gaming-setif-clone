import Slider from "@/components/Global/Slider";
import ProductCard from "@/components/Global/product/ProductCard";
import ProductSkeleton from "@/components/Global/product/ProductSkeleton";
import { getPopularProducts, getProduct2 } from "@/lib/api/ServerAction";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await getPopularProducts();
  const res2 = await getProduct2();

  return (
    <>
      <div className="container mx-auto">
        <div className="bg-slate-200 w-full aspect-[21/9] min-h-36 md:h-96 rounded-md overflow-hidden flex items-center justify-center">
          {/* <h1 className="text-slate-600 font-bold text-4xl md:text-6xl">
            Slider
          </h1> */}
          <Slider />
        </div>

        <div className="mt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="font-bold text-[26px] md:text-4xl text-start my-3 w-fit">
                Popular Products
              </h1>
              <p className="border-t-4 border-t-[#ff0000] w-28 mb-4"></p>
            </div>
            <Link href={"/shop"}>
              <div className="bg-[#ff0000] hover:bg-red-500 px-5 py-3 rounded-md  text-center">
                <h1 className="text-white font-semibold">view more</h1>
              </div>
            </Link>
          </div>

          <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 place-items-center">
            {res ? (
              <>
                {res?.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </>
            ) : (
              <>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <ProductSkeleton key={index} />
                  ))}
              </>
            )}
          </div>
        </div>

        <div className="mt-36">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="font-bold text-[26px] md:text-4xl text-start my-3 w-fit">
                Gaming Products
              </h1>
              <p className="border-t-4 border-t-[#ff0000] w-28 mb-4"></p>
            </div>
            <Link href={"/shop"}>
              <div className="bg-[#ff0000] hover:bg-red-500 px-5 py-3 rounded-md  text-center">
                <h1 className="text-white font-semibold">view more</h1>
              </div>
            </Link>
          </div>

          <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-2">
            {res2 ? (
              <>
                {res2?.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </>
            ) : (
              <>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <ProductSkeleton key={index} />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
