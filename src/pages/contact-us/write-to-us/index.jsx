import Footer from "@/components/footer/Footer";
import FormContainer from "@/components/form-container/FormContainer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <img
          src="https://cinerama.qodeinteractive.com/wp-content/uploads/2018/04/Contact-title-img.jpg"
          alt="dummy-img"
          className="mx-auto w-full h-[500px]"
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
                  <h1 className="font-bold">LOS ANGELES</h1>
                  <p className="py-2">
                    3 Wakehurst Street <br />
                    New York, NY 10002
                  </p>
                  <p>+1-202-555-0133</p>
                  <p>cinerama@qodethemes.com</p>
                </div>
                <div className=" p-4">
                  <h1 className="font-bold">NEW YORK</h1>
                  <p className="py-2">
                    3 Wakehurst Street <br />
                    New York, NY 10002
                  </p>
                  <p>+1-202-555-0133</p>
                  <p>cinerama@qodethemes.com</p>
                </div>
                <div className=" p-4">
                  <h1 className="font-bold">PRESS/MARKETING</h1>
                  <p className="py-2">
                    3 Wakehurst Street <br />
                    New York, NY 10002
                  </p>
                  <p>+1-202-555-0133</p>
                  <p>cinerama@qodethemes.com</p>
                </div>
                <div className=" p-4">
                  <h1 className="font-bold">FESTIVALS</h1>
                  <p className="py-2">
                    3 Wakehurst Street <br />
                    New York, NY 10002
                  </p>
                  <p>+1-202-555-0133</p>
                  <p>cinerama@qodethemes.com</p>
                </div>
                <div className=" p-4">
                  <h1 className="font-bold">SALES</h1>
                  <p className="py-2">
                    3 Wakehurst Street <br />
                    New York, NY 10002
                  </p>
                  <p>+1-202-555-0133</p>
                  <p>cinerama@qodethemes.com</p>
                </div>
                <div className=" p-4">
                  <h1 className="font-bold">SERVICING</h1>
                  <p className="py-2">
                    3 Wakehurst Street <br />
                    New York, NY 10002
                  </p>
                  <p>+1-202-555-0133</p>
                  <p>cinerama@qodethemes.com</p>
                </div>
              </div>
            </div>

            <div className="px-10">
            <FormContainer/>
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
      <Footer />
    </>
  );
};

export default index;
