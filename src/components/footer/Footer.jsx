import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] pt-20 px-10">
      <div className=" max-w-screen-xl mx-auto  py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-medium">Section 1</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-medium">Section 2</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-medium">Section 3</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-medium">Section 4</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Link 3
              </a>
            </li>
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
