import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] pt-20 px-10">
      <div className=" max-w-screen-xl mx-auto  py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-serif font-bold">ENDLOS STUDIO</h3>
          <ul className="mt-4 space-y-4">
            <li className="text-justify">
              <a className="text-gray-300 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, non eius deserunt exercitationem animi quis error provident deleniti repudiandae quaerat praesentium ullam totam commodi obcaecati libero sunt impedit, dolorem aliquid nisi explicabo quasi sequi voluptate? A officia earum aliquam ducimus. Debitis, sit. Atque, molestiae? Rem rerum ut recusandae excepturi quis eaque iure provident animi non.
              </a>
            </li>
            {/* <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 3
              </a>
            </li> */}
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
            {/* <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 3
              </a>
            </li> */}
          </ul>
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
