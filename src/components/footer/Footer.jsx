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
              Endlos Studio is a leading creative studio that pushes digital innovation's boundaries. With a team of talented artists, developers, and technologists, we create awe-inspiring experiences in various domains, such as virtual production, architectural visualization, interactive storytelling, and game development. Our commitment to excellence and passion for cutting-edge technologies sets us apart as we strive to transform visions into reality with unparalleled craftsmanship and innovation.
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
