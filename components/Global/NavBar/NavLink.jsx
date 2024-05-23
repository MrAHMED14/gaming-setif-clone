"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-7">
      <li>
        <Link
          className={`hover:text-[#ff0000] ${pathname === "/" ? "active" : ""}`}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`hover:text-[#ff0000] ${
            pathname === "/shop" ? "active" : ""
          }`}
          href="/shop"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          className={`hover:text-[#ff0000] ${
            pathname === "/mypc" ? "active" : ""
          }`}
          href="/mypc"
        >
          My Computer
        </Link>
      </li>
      <li>
        <Link
          className={`hover:text-[#ff0000] ${
            pathname === "/contact" ? "active" : ""
          }`}
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLink;
