import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bg from "../../../../public/assets/img1.jpg";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white py-5">
        <div className="relative">
          <div
            className="h-screen bg-cover bg-fixed"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "500px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">Careers</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-24 pb-10">
          <div className="flex items-center space-x-2 w-full relative max-w-screen-md mx-auto px-5">
            <input
              type="text"
              className="border text-black border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Job title or Skill..."
            />
            <AiOutlineSearch className="h-5 w-5 text-gray-400 absolute right-12" />
          </div>
        </div>
        <div className="rounded-md max-w-screen-md px-5 py-10 mx-auto bg-[#111111]">
        <div className="rounded-md border border-gray-400 px-4 md:flex mb-2 py-2">
            <div className="md:w-full md:pl-4  py-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Job Title</h3>
                <div className="flex flex-col items-center">
                <strong>Full Time</strong>
                <small>11/08/2022</small>
                </div>
              </div>

              <p className=" text-justify py-5 max-w-sm">
                The Paint Artist is responsible to remove unwanted artifacts,
                reconstruct a background or digitally correct a render or
                composite with attention
              </p>
              <button className="mt-4 bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
                Apply Now
              </button>
            </div>
          </div>

          <div className="rounded-md border border-gray-400 px-4 md:flex mb-2 py-2">
            <div className="md:w-full md:pl-4  py-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Job Title</h3>
                <div className="flex flex-col items-center">
                <strong>Full Time</strong>
                <small>11/08/2022</small>
                </div>
              </div>

              <p className=" text-justify py-5  max-w-sm">
                The Paint Artist is responsible to remove unwanted artifacts,
                reconstruct a background or digitally correct a render or
                composite with attention
              </p>
              <button className="mt-4 bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="rounded-md border border-gray-400 px-4 md:flex mb-2 py-2">
            <div className="md:w-full md:pl-4  py-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Job Title</h3>
                <div className="flex flex-col items-center">
                <strong>Full Time</strong>
                <small>11/08/2022</small>
                </div>
              </div>

              <p className=" text-justify py-5  max-w-sm">
                The Paint Artist is responsible to remove unwanted artifacts,
                reconstruct a background or digitally correct a render or
                composite with attention
              </p>
              <button className="mt-4 bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
                Apply Now
              </button>
            </div>
          </div>

          <div className="rounded-md border border-gray-400 px-4 md:flex mb-2 py-2">
            <div className="md:w-full md:pl-4  py-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Job Title</h3>
                <div className="flex flex-col items-center">
                <strong>Full Time</strong>
                <small>11/08/2022</small>
                </div>
              </div>

              <p className=" text-justify py-5  max-w-sm">
                The Paint Artist is responsible to remove unwanted artifacts,
                reconstruct a background or digitally correct a render or
                composite with attention
              </p>
              <button className="mt-4 bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
                Apply Now
              </button>
            </div>
          </div>

          <div className="rounded-md border border-gray-400 px-4 md:flex mb-2 py-2">
            <div className="md:w-full md:pl-4  py-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Job Title</h3>
                <div className="flex flex-col items-center">
                <strong>Full Time</strong>
                <small>11/08/2022</small>
                </div>
              </div>

              <p className=" text-justify py-5  max-w-sm">
                The Paint Artist is responsible to remove unwanted artifacts,
                reconstruct a background or digitally correct a render or
                composite with attention
              </p>
              <button className="mt-4 bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
                Apply Now
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
