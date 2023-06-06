import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin
} from "react-icons/ai";
import Link from "next/link";
import { footernav } from "@/allcontent/footernavdata";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setScrollingState } from "@/redux/action/scrolling/creator";

const Footer = () => {
  const dispatch = useDispatch();
  const scrollingData = useSelector((state) => state.scrollState.scrollState);
  const handleClick = (id) => {
    dispatch(setScrollingState(id));
  };
  useEffect(() => {
    if (scrollingData) {
      const sectionElement = document.getElementById(scrollingData);
      if (sectionElement) {
        setTimeout(() => {
          const scrollPosition = sectionElement.offsetTop;
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [scrollingData]);
  return (
    <footer className="bg-[#111111] text-white">
      <div className='border-b border-gray-700'></div>
      <div className="flex justify-between items-center flex-wrap px-5 max-w-screen-2xl mx-auto py-6">
        <div>
        <div className=" py-4">
        <h2 className="mb-6 text-lg font-semibold">Contact Us</h2>
                  <p className="py-2">
                  1108, Shivalik Shilp, Iskcon <br />
                  Cross Rd, Sanidhya, Ahmedabad 380015, <br />
                  Gujarat, India
                  </p>
                  <p> +91 9327777854</p>
                  <p>info@endlos.studio</p>
                </div>
        </div>
        {footernav.map((item,index)=>(
          <div key={index}>
          <h2 className="mb-6 text-lg font-semibold">{item.childmenu}</h2>
          {item.subchildren && item.subchildren.map((subchildren,index)=>(
            <ul key={index}>
            <li className="mb-4">
            <Link onClick={()=>handleClick(subchildren.id)} href={subchildren.link}>{subchildren.subchild}</Link>
            </li>
          </ul>
          ))}
        </div>
        ))}
        <div>
          <Link href='/contact-us/write-to-us'><button type="button" className="bg-gray-900 hover:bg-white hover:text-black text-md font-bold rounded-md px-10 py-2.5 text-center mr-2 mb-2 ">Review Us</button></Link>
        </div>
      </div>
     <div className="flex justify-between items-center px-10">
     <div className=" justify-between items-center  xl:flex">
        <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
        <Link href='https://www.linkedin.com/company/endlos-studio/' target="_blank"><AiFillLinkedin size={20} color="white" /></Link>
        </span>
        <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
        <Link href='https://www.instagram.com/endlos.studio/' target="_blank"> <AiFillInstagram size={20} color="white" /></Link>
        </span>
        <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
        <Link href='https://twitter.com/endlosstudio?s=21&t=eHDVOSrswcXZ_34Q0DJWFA' target="_blank"><AiOutlineTwitter size={20} color="white" /></Link>
        </span>
        <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
          <Link href='https://www.facebook.com/endlos.studio/' target="_blank"><AiFillFacebook size={20} color="white" /></Link>
        </span>
      </div>
     <div className="text-white py-6 text-center">
    <span>   © 2023 Endlos Studio. All Rights Reserved.</span> <Link href='/terms-and-conditions'><span className="ml-2">Terms & Conditions </span></Link> <Link href='/privacy-policies'><span className="ml-5"> Privacy Policy</span></Link>
  </div>
      <div></div>
     </div>
    </footer>
  );
};

export default Footer;
