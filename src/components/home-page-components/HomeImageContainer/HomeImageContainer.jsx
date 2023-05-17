import Image from "next/image";
import React from "react";
import bg from "../../../../public/assets/home-1-img.jpg";
const HomeImageContainer = () => {
  return (
    <div className="bg-[#111111] h-auto relative">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "auto",
          opacity:0.8
        }}
      >
        <div className="flex justify-end items-center py-10 pr-20" >
          <img className="opacity-100" src="/assets/home-2-img.jpg" data-aos="fade-left" data-aos-duration="2000" />
        </div>
        <p data-aos="fade-right" data-aos-duration="2000" className='flex justify-start max-w-4xl px-10 py-10 text-white font-serif text-justify  h-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores facere, dignissimos iure nemo voluptas ea voluptates eius rerum. Hic voluptatum quasi illum odio saepe, odit iusto sunt quis quae magni eum maxime aut minima sint aperiam quibusdam atque repudiandae quisquam quia laboriosam cupiditate incidunt fuga! Inventore aperiam eius obcaecati aspernatur recusandae voluptatibus dolores natus, vel, ullam aliquid fugiat optio fuga possimus repellat dolore quod ipsa eligendi ratione quia ad et quasi. Quidem exercitationem velit repudiandae quia numquam ipsum omnis. Quo mollitia dignissimos quam excepturi, adipisci nihil quasi inventore accusamus enim cum ipsam ab earum recusandae harum itaque quae expedita nulla quia iste laudantium, eum vitae! Atque obcaecati libero, porro modi ab hic totam aliquid ipsam at maxime molestias commodi eligendi. Cumque, eos?</p>
      </div>
    </div>
  );
};

export default HomeImageContainer;
