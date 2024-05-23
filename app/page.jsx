import Slider from "@/components/Global/Slider";
import ProductCard from "@/components/Global/product/ProductCard";
import ProductSkeleton from "@/components/Global/product/ProductSkeleton";
import { getPopularProducts, getProduct2 } from "@/lib/api/ServerAction";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await getPopularProducts();
  const res2 = await getProduct2();

  const SliderimgURL = [
    { link: "#", url: "/500.jpg" },
    { link: "#", url: "/900.jpg" },
    { link: "#", url: "/200-1.jpg" },
  ];

  return (
    <>
      <div className="sm:container sm:mx-auto mx-4">
        <Slider imgURL={SliderimgURL} />

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

          <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 min-[1250px]:grid-cols-4 min-[1250px]:gap-2 place-items-center">
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

          <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 min-[1250px]:grid-cols-4 min-[1250px]:gap-2 place-items-center">
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
