import Filters from "@/components/Global/Filters";
import PaginationProduct from "@/components/Global/PaginationProduct";
import ProductCard from "@/components/Global/product/ProductCard";
import ProductSkeleton from "@/components/Global/product/ProductSkeleton";
import { getLatestProduct } from "@/lib/api/ServerAction";

export const dynamic = "force-dynamic";

const Shop = async () => {
  const res = await getLatestProduct();

  return (
    <>
      <div className="sm:container sm:mx-auto mx-4 mb-9">
        <div className="mt-6">
          <h1 className="font-bold text-[26px] md:text-4xl text-start my-3 w-fit">
            Our Products
          </h1>
        </div>
        <p className="border-t-4 border-t-[#ff0000] w-28 mb-4"></p>
      </div>
      <div className="sm:container sm:mx-auto mx-4 flex gap-2 justify-center">
        {/* <Filters /> */}
        <div className="w-full flex flex-col gap-y-6">
          <div className="w-full grid gap-0 grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 min-[1250px]:grid-cols-4 min-[1250px]:gap-2 place-items-center">
            {res ? (
              <>
                {res?.map((item) => (
                  <ProductCard key={item.id} item={item} isAA={true} />
                ))}
              </>
            ) : (
              <>
                {Array(8)
                  .fill()
                  .map((_, index) => (
                    <ProductSkeleton key={index} />
                  ))}
              </>
            )}
          </div>
          <div className="flex justify-center items-center w-full">
            <PaginationProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
