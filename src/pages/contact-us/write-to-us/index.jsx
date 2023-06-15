import { HeadTag } from "@/components/HeaadTag/HeadTag";
import Footer from "@/components/footer/Footer";
import FormContainer from "@/components/form-container/FormContainer";
import Navbar from "@/components/navbar/Navbar";
import { getMetatags } from "@/redux/action/metatags/creator";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const index = () => {
  const path = useRouter().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (window) {
      const host = window.location.host;
      const hostWithPath = `${host}${path}`;
      dispatch(getMetatags("SET_META_TAGS", hostWithPath));
    }
  }, [dispatch, path]);
  return (
    <>
      <HeadTag />
      <Navbar Navclass="bg-[#111111] text-white" />
      <div className="pt-24 bg-[#111111] text-white">
        <div className="relative">
          <img
            src="/assets/contact_us.jpg"
            alt="endlos studio contact"
            className="mx-auto w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
        <div className="bg-[#111111]">
          <div className="max-w-screen-2xl mx-auto py-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <div className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                  <div className=" p-4">
                    <h2 className="font-bold">ADDRESS</h2>
                    <p className="py-2">
                      1108, Shivalik Shilp, Iskcon <br />
                      Cross Rd, Sanidhya, Ahmedabad 380015, <br />
                      Gujarat, India
                    </p>
                    <p> +91 9327777854</p>
                    <p>info@endlos.tech</p>
                  </div>
                </div>
              </div>
              <div className="px-10">
                <FormContainer />
              </div>
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.950518465944!2d72.5082235075285!3d23.027405573344772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3bf029e7b5%3A0x79f04cd53e9557b!2sEndlos%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1684211680037!5m2!1sen!2sin"
          className="max-w-full w-full"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default index;
