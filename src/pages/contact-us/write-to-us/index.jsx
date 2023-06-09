import { HeadTag } from "@/components/HeaadTag/HeadTag";
import Footer from "@/components/footer/Footer";
import FormContainer from "@/components/form-container/FormContainer";
import Navbar from "@/components/navbar/Navbar";
import { getMetatags } from "@/redux/action/metatags/creator";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const metaTags = useSelector((state) => state.allMetatags.payload);
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
<Head>
        <title> Contact Us - Get in Touch with Our Team | Endlos Studio</title>
        <meta name="description" content=" Contact -Endlos Studio, for any inquiries, feedback, or support needs. Our friendly team is always ready to assist you" />
        <meta name="keywords" content=" contact us, contact page, contact us form, contact information, contact number" />
        <meta property="og:title" content=" Contact Us - Get in Touch with Our Team | Endlos Studio" />
        <meta property="og:description" content="Contact -Endlos Studio, for any inquiries, feedback, or support needs. Our friendly team is always ready to assist you" />
        <meta property="og:site_name" content="Endlos Studio " />
        <meta property="og:type" content="article" />
        <meta property="og:image" content=" https://endlos.studio/assets/logo.png " />
        <meta property="og:url" content="https://endlos.studio/contact-us/write-to-us " />
        <meta name="twitter:title" content=" Contact Us - Get in Touch with Our Team | Endlos Studio" />
        <meta name="twitter:description" content="Contact -Endlos Studio, for any inquiries, feedback, or support needs. Our friendly team is always ready to assist you " />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/contact-us/write-to-us " />
        <meta name="twitter:image" content=" https://endlos.studio/assets/logo.png " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://endlos.studio/contact-us/write-to-us " />
      </Head>

      <Navbar Navclass="bg-[#111111] text-white" />
      <div className="pt-24 bg-[#111111] text-white">
        <div className="relative">
          <img
            src="/assets/contact_us.jpg"
            alt="endlos studio contact"
            className="mx-auto w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
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
