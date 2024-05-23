import "./navbar.css";
import Link from "next/link";
import { MdHeadsetMic } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FaSearch } from "react-icons/fa";
import CategoriesDropdownMenu from "../CategoriesDropdownMenu";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <div className="z-[999] sticky top-0 bg-white overflow-hidden flex items-center justify-between font-bold text-black h-16 px-3 sm:px-10">
      <div className="flex items-center justify-start w-56">
        <CategoriesDropdownMenu />
        <Link
          className="flex cursor-pointer lg:hidden text-xl font-black"
          href="/"
        >
          LOGO
        </Link>
      </div>

      <div className="hidden lg:flex items-center">
        <NavLink />
      </div>

      <div className="flex items-center justify-end w-56">
        <div className="hidden lg:flex md:gap-2">
          <MdHeadsetMic className="text-lg" />
          <p>
            Hot line: <span className="text-[#ff0000]"> 0554 50 81 60</span>
          </p>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="text-2xl cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-7">
                <div className="flex gap-4 items-center border-b-2 border-b-black">
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
                <ul className="flex flex-col gap-7 font-semibold">
                  <Link className="hover:text-[#ff0000]" href="/">
                    <SheetClose asChild>
                      <p>Home</p>
                    </SheetClose>
                  </Link>

                  <SheetClose asChild>
                    <Link className="hover:text-[#ff0000]" href="/shop">
                      Shop
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link className="hover:text-[#ff0000]" href="/mypc">
                      My Computer
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link className="hover:text-[#ff0000]" href="/contact">
                      Contact
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link className="hover:text-[#ff0000]" href="/cart">
                      My Cart
                    </Link>
                  </SheetClose>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
