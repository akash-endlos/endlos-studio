import Image from "next/image";
import React from "react";
import bg from "../../../../public/assets/home-7-img-9.jpg";
const HomeImageContainer = () => {
  return (
    <div className="bg-[#111111] pt-32 h-auto ">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="flex justify-center items-center py-10">
                        <img  src="/assets/home-7-img-1.jpg" />
                    </div>
                    <p className='max-w-screen-lg mx-auto py-10 text-white font-serif text-justify px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores facere, dignissimos iure nemo voluptas ea voluptates eius rerum. Hic voluptatum quasi illum odio saepe, odit iusto sunt quis quae magni eum maxime aut minima sint aperiam quibusdam atque repudiandae quisquam quia laboriosam cupiditate incidunt fuga! Inventore aperiam eius obcaecati aspernatur recusandae voluptatibus dolores natus, vel, ullam aliquid fugiat optio fuga possimus repellat dolore quod ipsa eligendi ratione quia ad et quasi. Quidem exercitationem velit repudiandae quia numquam ipsum omnis. Quo mollitia dignissimos quam excepturi, adipisci nihil quasi inventore accusamus enim cum ipsam ab earum recusandae harum itaque quae expedita nulla quia iste laudantium, eum vitae! Atque obcaecati libero, porro modi ab hic totam aliquid ipsam at maxime molestias commodi eligendi. Cumque, eos?</p>
        {/* <div class="relative">
          <img class="ml-auto" src="/assets/home-7-img-1.jpg" alt="Image" />
          <div class="absolute top-[72%] left-[27%] w-full h-full flex items-center justify-center">
            <div>
              <h1 className=" text-white  text-7xl font-bold inline-block align-middle">
                HOW FAR WILL YOU GO?
              </h1>
              <p className="text-white pt-5 w-2/3 leading-8">
                Lorem Ipsn gravida nibh vel velit auctor aliquet. Aene sollic
                conseut ipsutis sem nibh id elit. Duis sed nibh vel a siteiu
                amet nibh vulputate. Dolor orem Ipsn vel velitui auctor aliquet
                re ipsum dolor sit amet rem Ipsn gravida nibh vel velit auctor
                aliquet. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                Etiam rhoncus. Maecenas tempus, tellus eget condimentu aene.
              </p>
              <button className="px-16 uppercase py-3 border-2 border-white text-white my-10 font-semibold tracking-widest">
                Official Trailer
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeImageContainer;
