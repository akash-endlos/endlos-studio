import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bg from "../../../../public/assets/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { getMetatags } from "@/redux/action/metatags/creator";
import { HeadTag } from "@/components/HeaadTag/HeadTag";

const Careers = () => {
  const path = useRouter().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (window) {
      const host = window.location.host;
      const hostWithPath = `${host}${path}`;
      dispatch(getMetatags("SET_META_TAGS", hostWithPath));
    }
  }, [dispatch, path]);
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
    <HeadTag/>
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
      </div>
      <Footer />
    </>
  );
};

export default Careers;

