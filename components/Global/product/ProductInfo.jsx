"use client";

import { addToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const ProductInfo = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const id = data?.id;
    const title = data?.attributes?.title;
    const price = data?.attributes?.price;
    const img = data?.attributes?.images?.data[0]?.attributes?.url;
    const qty = 1;
    dispatch(addToCart({ id, title, price, img, qty }));
    toast.success("Your product added successfully.", {
      position: "top-right",
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:[20%] lg:w-[30%]">
        <div>
          <h1 className="text-3xl font-bold">{data?.attributes?.title}</h1>
          <span className="font-semibold">
            <span className="font-semibold">Brand: </span>Asus
          </span>
        </div>
        <p className="text-gray-700"></p>
        <h6 className="text-2xl font-bold">{data?.attributes?.price}.00 DA</h6>
        <div className="flex flex-row items-center gap-12">
          <button
            disabled={data?.attributes?.isOutStock}
            onClick={handleAddToCart}
            className="bg-[#ff0000] disabled:bg-slate-800  hover:bg-red-500 text-white font-semibold py-3 px-16 rounded-lg h-full"
          >
            {data?.attributes?.isOutStock ? "OUT OF STOCK" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
