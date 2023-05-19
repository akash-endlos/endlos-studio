import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (

    <footer class="bg-gray-900 text-white">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a class="flex items-center">
              <img src="/assets/logo.png" className="w-60" />
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-lg font-semibold">Portfolio</h2>
              <ul >
                <li class="mb-4">
                  <a >Pre visualization</a>
                </li>
                <li class="mb-4">
                  <a >Virtual production</a>
                </li>
                <li class="mb-4">
                  <a >Game development</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold">Company</h2>
              <ul >
                <li class="mb-4">
                  <a class=" ">Careers</a>
                </li>
                <li class="mb-4">
                  <a >About us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold">Contact Us</h2>
              <ul >
              <li class="mb-4">
                  <a class=" ">info@endlos.tech</a>
                </li>
                <li class="mb-4">
                  <a class=" ">+91 9327777854</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between pt-16">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 "> © 2023 Endlos Studio. All Rights Reserved.
          </span>
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
      </div>
    </footer>

  );
};

export default Footer;


{/* <footer className="bg-gray-900 px-10">
      <div className="mx-6 py-10 text-center md:text-left text-white">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <img src="/assets/logo.png" className="w-60 py-2" />
            <p className="max-w-xs text-justify">
              Endlos Studio is a leading creative studio that pushes digital innovation's boundaries. With a team of talented artists, developers, and technologists, we create awe-inspiring experiences in various domains, such as virtual production, architectural visualization, interactive storytelling, and game development.
            </p>
          </div>
          <div className="text-white">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a
              >Angular</a
              >
            </p>
            <p className="mb-4">
              <a
              >React</a
              >
            </p>
            <p className="mb-4">
              <a
              >Vue</a
              >
            </p>
            <p>
              <a
              >Laravel</a
              >
            </p>
          </div>
          <div className="text-white">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a
              >Pricing</a
              >
            </p>
            <p className="mb-4">
              <a
              >Settings</a
              >
            </p>
            <p className="mb-4">
              <a
              >Orders</a
              >
            </p>
            <p>
              <a
              >Help</a
              >
            </p>
          </div>
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start gap-2">
              <AiFillMail />
              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start gap-2">
              <BsFillTelephoneFill />
              + 01 234 567 88
            </p>
          </div>
        </div>
      </div>

      <div className="text-white py-6 text-center">
        <span>   © 2023 Endlos Studio. All Rights Reserved.</span>
      </div>
    </footer> */}