import Link from "next/link";
import { useEffect, useState } from "react";
import { TiTicket } from "react-icons/ti";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import NewNavbar from "./NewNavbar";
import HamburgerMenu from "./HamburgerMenu";

function Navbar({ Navclass = 'bg-transparent text-white' }) {

  const [isscroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScroll(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-50 flex justify-between items-center px-5 py-5  w-full h-[90px] transition duration-100 navbar ${isscroll ? "bg-[#161616] text-white" : `${Navclass}`
          }`}
      >
        <Link href="/"><span className="font-bold tracking-[.2em] cursor-pointer text-2xl align-middle">
          ENDLOS STUDIO
        </span></Link>
        <NewNavbar />
        <HamburgerMenu />
        <div className=" justify-between items-center hidden xl:flex">
          <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
            <AiFillYoutube size={20} color="white" />
          </span>
          <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
            <AiFillInstagram size={20} color="white" />
          </span>
          <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
            <AiOutlineTwitter size={20} color="white" />
          </span>
          <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
            <AiFillFacebook size={20} color="white" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
