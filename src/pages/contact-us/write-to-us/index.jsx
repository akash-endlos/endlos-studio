import Footer from "@/components/footer/Footer";
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
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

            <div>
              <form className="w-full mx-auto px-5">
                <div className="text-white pb-10">
                  <span className="font-bold tracking-[.2em] cursor-pointer text-2xl align-middle ">
                    Write Us
                  </span>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="please enter full name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="please enter email"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className=" outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button className="bg-white text-black hover:text-white hover:bg-black py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
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
