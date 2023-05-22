import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
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
                  <p>info@endlos.tech</p>
                </div>
          {/* <h2 className="mb-6 text-lg font-semibold">Portfolio</h2>
          <ul >
            <li className="mb-4">
              <a >Pre visualization</a>
            </li>
            <li className="mb-4">
              <a >Virtual production</a>
            </li>
            <li className="mb-4">
              <a >Game development</a>
            </li>
          </ul> */}
        </div>
        <div>
          <h2 className="mb-6 text-lg font-semibold">Services</h2>
          <ul >
            <li className="mb-4">
              <a >Pre visualization</a>
            </li>
            <li className="mb-4">
              <a >Virtual production</a>
            </li>
            <li className="mb-4">
              <a >Game development</a>
            </li>
            <li className="mb-4">
              <a >Archviz</a>
            </li>
          </ul>
        </div>
        <div>
          <Link href='/contact-us/write-to-us'><button type="button" className="bg-gray-900 hover:bg-white hover:text-black text-md font-bold rounded-md px-10 py-2.5 text-center mr-2 mb-2 ">Review Us</button></Link>
        </div>
      </div>
     <div className="flex justify-between items-center px-10">
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
     <div className="text-white py-6 text-center">
    <span>   © 2023 Endlos Studio. All Rights Reserved.</span>
  </div>
      <div></div>
     </div>
    </footer>
  );
};

export default Footer;
