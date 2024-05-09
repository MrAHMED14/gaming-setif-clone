import ProductCard from "@/components/global/product/ProductCard";
import ProductSkeleton from "@/components/global/product/ProductSkeleton";
import { getLatestProduct } from "@/lib/api/ServerAction";

export const dynamic = "force-dynamic";

const Shop = async () => {
  const res = await getLatestProduct();

  return (
    <>
      <div className="container mx-auto mb-9">
        <div className="mt-6">
          <h1 className="font-bold text-4xl text-start my-3 w-fit">
            Our Products
          </h1>
        </div>
        <p className="border-t-4 border-t-[#ff0000] w-28 mb-4"></p>
      </div>
      <div className="container mx-auto flex gap-2 justify-center">
        <div className="w-[17%] hidden lg:block">
          <div className="bg-slate-200/30 border sticky top-20 w-full flex-col p-4 rounded-md">
            <h1 className="font-bold text-lg">Filters</h1>
            <p className="py-3 bg-white px-2 rounded mt-3">Categories</p>
            <p className="py-3 bg-white px-2 rounded mt-3">Sub Categories</p>
            <p className="py-3 bg-white px-2 rounded mt-3">Price</p>
            <p className="py-3 bg-white px-2 rounded mt-3">Brand</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-2">
          {res ? (
            <>
              {res?.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </>
          ) : (
            <>
              {Array(16)
                .fill()
                .map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
