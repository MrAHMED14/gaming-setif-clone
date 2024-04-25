import Link from "next/link";
import { MdLocationPin,MdCall } from "react-icons/md";
const ContactBar = () => {
    return (
      <div className="hidden md:flex justify-center items-center bg-[#ff0000] h-11 text-white font-bold text-[14px]">
        <div className="flex gap-4">
            <Link href="/contact" className="hover:text-slate-950">
                <p className="flex items-center gap-1"><MdCall /> 0554 05 81 58</p>
            </Link>

            <p className="font-light">|</p>
            
            <Link href="/contact" className="hover:text-slate-950">
                    <p className="flex items-center gap-1"><MdLocationPin/> Our location</p>
            </Link>
        </div>
      </div>
    );
  };
  export default ContactBar;