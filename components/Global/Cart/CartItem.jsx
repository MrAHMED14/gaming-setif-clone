"use client";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete = (cartId) => {
    dispatch(removeFromCart(cartId));
  };

  const handleDecrementQty = (cartId) => {
    dispatch(decrementQty(cartId));
  };
  const handleIncrementQty = (cartId) => {
    dispatch(incrementQty(cartId));
  };

  return (
    <>
      <div className="bg-slate-100 h-fit gap-3 flex justify-between items-center px-5 py-3 rounded-md">
        <div className="flex justify-center items-center w-14 h-10">
          <div className="flex justify-center items-center w-14 h-full object-cover">
            <Image
              src={data.img}
              width={48}
              height={48}
              alt="img"
              className="rounded"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full">
          <div className="flex flex-col">
            <p className="line-clamp-1 w-1/2 md:w-full font-medium">
              {data.title}
            </p>
            <div className="flex items-center w-fit justify-center gap-1 bg-white rounded-md text-white h-fit">
              <button
                className="bg-slate-400 px-[9px] text-center rounded-l-md font-bold"
                onClick={() => handleDecrementQty(data.id)}
              >
                -
              </button>
              <h1 className="text-black md:w-5 text-center">{data.qty}</h1>
              <button
                className="bg-slate-400 px-2 py-[2px] text-center rounded-r-md  font-bold text-sm"
                onClick={() => handleIncrementQty(data.id)}
              >
                +
              </button>
            </div>
          </div>

          <div className="w-fit px-3 flex items-center gap-1">
            <h1 className="font-bold text-xs md:text-base">
              {data.price * data.qty}.00
            </h1>
            <h1 className="font-bold text-xs md:text-base">DA</h1>
            <button onClick={() => handleDelete(data.id)}>
              <MdDeleteForever className="hover:text-[#ff0000] text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
