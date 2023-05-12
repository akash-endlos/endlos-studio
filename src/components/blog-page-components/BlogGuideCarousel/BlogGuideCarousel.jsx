import React from 'react';
import Slider from 'react-slick';

const BlogGuideCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // set the duration between each slide transition
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='max-w-full p-10 mx-auto bg-[#111111]'>
        <Slider {...settings}>
      <div>
      <video src="/assets/1.mp4" autoPlay alt="Slide 1" />
      </div>
      <div>
      <video src="/assets/1.mp4" autoPlay alt="Slide 1" />
      </div>
      <div>
      <video src="/assets/1.mp4" autoPlay alt="Slide 1" />
      </div>
      <div>
      <video src="/assets/1.mp4" autoPlay alt="Slide 1" />
      </div>
      <div>
      <video src="/assets/1.mp4" autoPlay alt="Slide 1" />
      </div>
      <div>
      <video src="/assets/1.mp4" autoPlay alt="Slide 1" />
      </div>
      <div>
      <video src="/assets/1.mp4" autoPlay alt="Slide 1" />
      </div>
    </Slider>
    </div>
  );
};

export default BlogGuideCarousel;
