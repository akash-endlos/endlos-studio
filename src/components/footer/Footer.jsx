import React from "react";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-10">
      <div class="mx-auto w-full max-w-screen-full text-white p-4 py-6 lg:py-8">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <img src="/assets/logo.png" className="w-60" />
            <ul className="mt-4 space-y-4 max-w-sm">
              <li className="text-justify">
                <a className="text-gray-300">
                  Endlos Studio is a leading creative studio that pushes digital innovation's boundaries. With a team of talented artists, developers, and technologists, we create awe-inspiring experiences in various domains, such as virtual production, architectural visualization, interactive storytelling, and game development.
                </a></li>
            </ul>
          </div>
          <div className="col-span-3">
            <h3 className="text-white text-lg font-medium">PortFolio</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Archviz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Pre Visualization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Virtual Production
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Game Development
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Faq
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-lg font-medium">Address</h3>
            <div className=" py-4">
              <div className="py-2 pt-5 flex gap-2 items-center"><BsFillTelephoneFill/> +91 9327777854</div>
              <div className="py-2 flex items-center gap-2"><AiFillMail/>info@endlos.tech</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-300">
          © 2023 Endlos Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


{/* <div>
<h3 className="text-white text-lg font-serif font-bold">ENDLOS STUDIO</h3>
<ul className="mt-4 space-y-4">
  <li className="text-justify">
    <a className="text-gray-300">
    Endlos Studio is a leading creative studio that pushes digital innovation's boundaries. With a team of talented artists, developers, and technologists, we create awe-inspiring experiences in various domains, such as virtual production, architectural visualization, interactive storytelling, and game development.
    </a>
</ul>
</div>
<div>
<h3 className="text-white text-lg font-medium">ProtFolio</h3>
<ul className="mt-4 space-y-4">
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
      Archviz
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
      Pre Visualization
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
      Virtual Production
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
      Game Development
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
      Blog
    </a>
  </li>
</ul>
</div>
<div>
<h3 className="text-white text-lg font-medium">Company</h3>
<ul className="mt-4 space-y-4">
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
      About Us
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
     Careers
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
     Services
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
   Our Vision
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
     Faq
    </a>
  </li>
</ul>
</div>
<div>
<h3 className="text-white text-lg font-medium">Contact Us</h3>
<ul className="mt-4 space-y-4">
  <li>
    <a href="#" className="text-gray-300 hover:text-white">
      Write to us
    </a>
  </li>
</ul>
</div> */}