import Link from "next/link";
import { useEffect, useState } from "react";
import { TiTicket } from "react-icons/ti";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin
} from "react-icons/ai";
import NewNavbar from "./NewNavbar";
import { PopupButton } from "react-calendly";
import HamburgerMenu from "./HamburgerMenu";

function Navbar({ Navclass = 'bg-transparent text-white' }) {

  const [isscroll, setIsScroll] = useState(false);
  const [Body, setBody] = useState("");

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
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBody(document.body);
    }
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-50 flex flex-wrap justify-between items-center px-5  w-full h-[90px] transition duration-100 navbar ${isscroll ? "bg-[#161616] text-white" : `${Navclass}`
          }`}
      >
        <Link href="/"><span className="font-bold tracking-[.2em] cursor-pointer text-2xl align-middle font-serif">
          <img src="/assets/logo.png" className="w-60" />
        </span></Link>
        <NewNavbar />
        <div className="flex justify-center items-center gap-5">
          <div className="px-5 py-2 border rounded-lg bg-bg-transparent hover:bg-[#111111] hover:text-white hover:border-none outline-none">
            <PopupButton
              url="https://calendly.com/endlos_tech/30min"
              rootElement={Body}
              text="Book a meeting"
              className="floating-btn"
            /></div>
        </div>
        <HamburgerMenu />
      </div>
    </>
  );
}

export default Navbar;
