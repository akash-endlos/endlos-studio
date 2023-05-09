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
    { src: "/assets/1.png", alt: "Logo 1" },
    { src: "/assets/2.png", alt: "Logo 1" },
    { src: "/assets/3.png", alt: "Logo 1" },
    { src: "/assets/1.png", alt: "Logo 1" },
    { src: "/assets/2.png", alt: "Logo 1" },
    { src: "/assets/3.png", alt: "Logo 1" },
  ];
  return (
    <div className="w-full bg-[#111111] pt-10">
      <div className='max-w-7xl mx-auto'>
        <Slider {...settings}>
          {clientLogos.map((item, index) => (

            <img src={item.src} alt={item.alt} className='w-10 h-40' key={index} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HomeProductionHouse