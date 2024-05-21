import PathBreadcrumb from "@/components/Global/PathBreadcrumb";
import ProductBanner from "@/components/Global/product/ProductBanner";
import ProductCard from "@/components/Global/product/ProductCard";
import ProductInfo from "@/components/Global/product/ProductInfo";
import ProductSkeleton from "@/components/Global/product/ProductSkeleton";
import {
  getPopularProducts,
  getProductByIds,
  getProductCategory,
} from "@/lib/api/ServerAction";
import Link from "next/link";

const productDetails = async ({ params }) => {
  const data = await getProductByIds(params?.productId);
  const category = await getProductCategory(params?.productId);

  const res = await getPopularProducts();

  return (
    <div className="container mx-auto">
      <div className="md:mx-10 mt-8">
        <PathBreadcrumb
          Category={category?.attributes?.name}
          SubCategory={data?.attributes?.sub_category?.data?.attributes?.name}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 lg:flex-row gap-20 lg:items-center">
        <ProductBanner data={data} />
        <ProductInfo data={data} />
      </div>

      <div className="mt-48 flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="font-bold text-[26px] md:text-4xl text-start my-3 w-fit">
            Related Products
          </h1>
          <p className="border-t-4 border-t-[#ff0000] w-28 mb-4"></p>
        </div>
        {/* <Link href={"/shop"}>
          <div className="bg-[#ff0000] hover:bg-red-500 px-5 py-3 rounded-md  text-center">
            <h1 className="text-white font-semibold">view more</h1>
          </div>
        </Link> */}
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
  );
};

export default productDetails;
