import Link from "next/link";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import CartLen from "../Cart/CartLen";

const SearchBar = () => {
  return (
    <div className="hidden lg:flex items-center justify-between font-bold text-black h-16 px-10">
      <div className=" w-36">
        <Link href="/" className="text-xl font-extrabold">
          {"LOGO"}

          {/*<Image 
                src={'/logo.jpg'}
                width={60}
                height={60}
                alt="logo"/>*/}
        </Link>
      </div>

      <div className="flex gap-4 items-center border-b-2 border-b-black">
        <div>
          <p>All Categories</p>
        </div>
        <div className="flex items-center gap-1">
          <label>
            <FaSearch />
          </label>
          <input
            className="focus:outline-none p-1"
            type="text"
            placeholder="Search for items ..."
            name="searchBar"
          />
        </div>
      </div>

      <div className="flex items-center justify-end w-36">
        <div className="flex items-center gap-3 text-xl">
          <Link
            href="/cart"
            className=" hover:text-[#ff0000] cursor-pointer flex items-center justify-center"
          >
            <FaShoppingCart className="text-2xl" />
            <CartLen />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
