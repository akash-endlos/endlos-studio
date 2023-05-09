import Image from "next/image";
import React from "react";
import bg from "../../../../public/assets/home-7-img-9.jpg";
const HomeImageContainer = () => {
  return (
    <div className="bg-[#111111] pt-28 ">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >

        <div className="flex items-start gap-50">
          <div className=" transparent-text ">
            HIM
          </div>
          <div className="relative">
            <img src="/assets/home-7-img-1.jpg" />
            <div className="absolute bottom-[-59%] left-[-8%]">
            <h1 className=" text-white  text-7xl font-bold inline-block align-middle">HOW FAR WILL YOU GO?</h1>
            <p className="text-white pt-5 w-3/4 leading-8">
            Lorem Ipsn gravida nibh vel velit auctor aliquet. Aene sollic conseut ipsutis sem nibh id elit. Duis sed nibh vel a siteiu amet nibh vulputate. Dolor orem Ipsn vel velitui auctor aliquet re ipsum dolor sit amet rem Ipsn gravida nibh vel velit auctor aliquet. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentu aene.
            </p>
            <button className="px-16 uppercase py-3 border-2 border-white text-white my-10 font-semibold tracking-widest">Official Trailer</button>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default HomeImageContainer;
