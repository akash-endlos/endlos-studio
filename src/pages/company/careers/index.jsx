import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bg from "../../../../public/assets/img1.jpg";
import { useSelector } from "react-redux";
import Link from "next/link";

const Careers = () => {
  const careers = useSelector((state) => state.allcareers.career)
  const [searchValue, setsearchValue] = useState('')
  const [filteredData, setfilteredData] = useState([])
  useEffect(() => {
    if (searchValue) {
      const filterCareer = careers.filter((item) => item.designation.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      setfilteredData(filterCareer)
    }
    else {
      setfilteredData(careers)
    }
  }, [searchValue])
  return (
    <>
      <Navbar />
      <div className="bg-black text-white ">
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
        <p className="text-5xl text-center py-16">Coming Soon....</p>
        {/* <div className="pt-24 pb-10">
          <div className="flex items-center space-x-2 w-full relative max-w-screen-md mx-auto px-5">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setsearchValue(e.target.value)}
              className="border text-white bg-black border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:border-[#db1eb3]"
              placeholder="Job title or Skill..."
            />
            <AiOutlineSearch className="h-5 w-5 text-gray-400 absolute right-12" />
          </div>
        </div>
        <div className="rounded-md  px-5 py-10 mx-auto bg-[#111111]">
          {filteredData.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4">
            {filteredData && filteredData.map((item, index) => (
              <div key={index} className="rounded-md border border-gray-400 px-4 md:flex mb-2 py-2">
                <div className="md:w-full md:pl-4  py-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{item.designation}</h3>
                    <div className="flex flex-col items-center">
                      <strong>{item.jobType}</strong>
                      <small>{item.date}</small>
                    </div>
                  </div>

                  <p className=" text-justify py-5 max-w-sm">
                    {item.description}
                  </p>
                  <Link href={`careers/${item.id}`}>
                    <button className="mt-4 bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>) : <h3 className="text-center text-2xl font-semibold">There is No Data What you Want to Search</h3>}

        </div> */}
       
      </div>
      <Footer />
    </>
  );
};

export default Careers;

