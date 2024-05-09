import ProductBanner from "@/components/global/product/ProductBanner";
import ProductInfo from "@/components/global/product/ProductInfo";
import { getProductByIds, getProductCategory } from "@/lib/api/ServerAction";

const productDetails = async ({ params }) => {
  const data = await getProductByIds(params?.productId);
  const category = await getProductCategory(params?.productId);

  return (
    <div className="container mx-auto">
      <div className="md:mx-10  mt-8">
        <h1 className="text-slate-900 font-bold text-xl md:text-3xl">
          {data?.attributes?.sub_category?.data?.attributes?.name
            ? category?.attributes?.name +
              " / " +
              data?.attributes?.sub_category?.data?.attributes?.name
            : ""}{" "}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 lg:flex-row gap-20 lg:items-center">
        <ProductBanner data={data} />
        <ProductInfo data={data} />
      </div>
    </div>
  );
};

export default productDetails;
