import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 w-full md:w-1/2">
      <div className="flex items-center justify-center w-full h-36 bg-slate-200 rounded-md">
        <h1 className="text-slate-600 text-xl lg:text-3xl font-bold">
          Your cart is empty.
        </h1>
      </div>
      <Link
        href={"/shop"}
        className="py-4 w-full bg-[#ff0000] hover:bg-red-500 rounded-md text-center font-semibold text-white"
      >
        Add Products
      </Link>
    </div>
  );
};

export default EmptyCart;
