import './navbar.css'
import Link from "next/link"
import { BiSolidCategory } from "react-icons/bi";
import { MdHeadsetMic } from 'react-icons/md';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    return (
        <div className="z-[999] sticky top-0 bg-white overflow-hidden flex items-center justify-between font-bold text-black h-16 px-5 sm:px-10">
            <div className="flex items-center justify-start w-56">
                <div className="cursor-pointer">
                    <p className="hidden lg:flex items-center gap-1 text-base md:text-xl"><BiSolidCategory /> Browse Categories</p>
                    <Link className="flex lg:hidden text-2xl font-black" href="/">LOGO</Link>
                </div>
            </div>

            <div className="hidden lg:flex items-center">
                <ul className="flex gap-7">
                    <Link className="hover:text-[#ff0000]" href="/">Home</Link>
                    <Link className="hover:text-[#ff0000]" href="/shop">Shop</Link>
                    <Link className="hover:text-[#ff0000]" href="/mypc">My Computer</Link>
                    <Link className="hover:text-[#ff0000]" href="/contact">Contact</Link>
                </ul>
            </div>

            <div className='flex items-center justify-end w-56'>
                <div className='hidden lg:flex md:gap-2'>
                    <MdHeadsetMic className='text-lg' />
                    <p>Hot line: <span className='text-[#ff0000]'> 0554 05 81 58</span></p>
                </div>
                <div className='flex lg:hidden'>
                    <GiHamburgerMenu className='text-2xl cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default NavBar