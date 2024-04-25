"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

const CheckoutCarts = () => {
  const cartItem = useSelector((state) => state.cart.products);
  const totalPrice = cartItem.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0);
  return (
    <div>
      {cartItem.length > 0 ? (
        <>
          <div className="container mx-auto w-full md:w-[70%]">
            <div className="flex flex-col gap-5">
              {cartItem?.map((data) => (
                <div
                  key={data.id}
                  className="bg-slate-100 h-fit gap-3 flex justify-between items-center px-5 py-3 rounded-md"
                >
                  <div className="flex justify-center items-center w-14 h-10">
                    <div className="flex justify-center items-center w-14 h-full object-cover">
                      <Image
                        src={data.img}
                        width={48}
                        height={48}
                        alt="img"
                        className="rounded object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 w-full">
                    <p className="line-clamp-1 w-1/2 md:w-full font-medium">
                      {data.title} x{data.qty}
                    </p>

                    <div className="w-fit px-3 flex items-center gap-1">
                      <h1 className="font-bold text-xs md:text-base">
                        {data.price * data.qty}
                      </h1>
                      <h1 className="font-bold text-xs md:text-base">DA</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h1>{totalPrice}</h1>
          </div>
        </>
      ) : (
        <>
          <div className="container mx-auto w-full md:w-1/2">
            <div className="flex items-center justify-center w-full h-28 bg-slate-200 rounded-md">
              <h1 className="text-slate-600 text-xl lg:text-3xl font-bold">
                You d ont have any products
              </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutCarts;
