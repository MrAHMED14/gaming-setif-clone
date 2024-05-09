"use client";

import Link from "next/link";
import { restCart } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../../components/global/Cart/CartItem";
import EmptyCart from "../../../components/global/Cart/EmptyCart";

const CartPage = () => {
  const cartItem = useSelector((state) => state.cart.products);
  const totalPrice = cartItem?.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0);
  const dispatch = useDispatch();
  const handleResetCart = () => {
    dispatch(restCart());
  };

  return (
    <>
      <div className="container mx-auto mb-14">
        <div className="mt-6">
          <h1 className="font-bold text-[26px] md:text-4xl text-start my-3 w-fit">
            Cart Products
          </h1>
          <p className="border-t-4 border-t-[#ff0000] w-28 mb-4"></p>
        </div>
      </div>
      {cartItem?.length > 0 ? (
        <>
          <div className="container mx-auto w-full md:w-[70%]">
            <div className="flex flex-col gap-5">
              {cartItem?.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </div>
            <button
              onClick={handleResetCart}
              className="text-sm px-5 py-2 hover:text-[#ff0000] font-medium"
            >
              Remove all products
            </button>
            <div className="md:flex items-center justify-between gap-2 mt-24">
              <h1 className="text-2xl font-bold">
                <span className="font-extrabold">Total:</span>{" "}
                <span className="text-slate-700">{totalPrice} DA</span>
              </h1>
              <Link
                href={"/checkout"}
                className="bg-[#ff0000] hover:bg-red-500 p-2 rounded-md font-semibold text-white"
              >
                PROCESS TO CHECKOUT
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <EmptyCart />
        </>
      )}
    </>
  );
};

export default CartPage;
