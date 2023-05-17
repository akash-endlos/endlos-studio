import React from 'react'
import Slider from 'react-slick';


const HomeProductionHouse = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false
  };
  const clientLogos = [
    { src: "/assets/tool-1.jpg", alt: "Logo 1" },
    { src: "/assets/tool-2.jpg", alt: "Logo 1" },
    { src: "/assets/tool-3.jpg", alt: "Logo 1" },
    { src: "/assets/tool-4.jpg", alt: "Logo 1" },
    { src: "/assets/tool-5.jpg", alt: "Logo 1" },
    // { src: "/assets/3.png", alt: "Logo 1" },
  ];
  return (
    <div className="w-full bg-[#111111] pt-10">
      <div className='max-w-screen-2xl mx-auto'>
        <Slider {...settings}>
          {clientLogos.map((item, index) => (

            <img src={item.src} alt={item.alt} className='w-full h-auto' key={index} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HomeProductionHouse