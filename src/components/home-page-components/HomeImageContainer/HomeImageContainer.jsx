import Image from "next/image";
import React from "react";
import bg from "../../../../public/assets/home-1-img.jpg";
import Link from "next/link";
const HomeImageContainer = () => {
  return (
    <div className="bg-[#111111] ">
      <div className="px-5">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 py-10">
          <div className="md:order-2">
            <img src="/assets/About endlos _1.jpg" alt="unreal engine studio" className="w-full max-h-auto h-[550px] rounded-2xl" />
          </div>
          <div className="md:order-1">
            <h1 className="font-bold text-4xl text-white">About Endlos Studio</h1>
            <p className="text-justify text-[#b6b6b6] h-auto py-5">Welcome to Endlos Studio, a leading creative powerhouse specializing in harnessing the full potential of Unreal Engine. We are a passionate team of developers, artists, and storytellers dedicated to crafting unforgettable interactive experiences and pushing the boundaries of visual innovation.</p>
            <p className="text-justify text-[#b6b6b6] h-auto">At Endlos Studio, we pride ourselves on our deep expertise in Unreal Engine and its cutting-edge capabilities. With years of experience in game development, virtual reality (VR), augmented reality (AR), and architectural visualization, we have honed our skills to create breathtaking worlds that captivate audiences and leave a lasting impact.</p>
            <p className="text-justify text-[#b6b6b6] h-auto py-5">Our multidisciplinary team comprises talented individuals with diverse backgrounds in game design, 3D modeling, animation, programming, and more. We combine a harmonious blend of artistic vision and technical expertise, ensuring that every project we undertake is a seamless fusion of creativity and technical excellence. From the initial concept to the final product, we work closely with our clients to understand their unique goals and aspirations. Whether you're a game developer looking to create an immersive and engaging gaming experience, an architect seeking to visualize your design with photorealistic precision, or a business owner exploring the potential of VR and AR for marketing and training, we have the skills and expertise to bring your vision to life. Our commitment to quality is unwavering. We believe in delivering nothing short of excellence in every aspect of our work. With a keen eye for detail, meticulous craftsmanship, and a dedication to staying at the forefront of industry trends, we ensure that every project surpasses expectations and stands out from the crowd.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-5">
          <div>
            <img src="/assets/About endlos _2.jpg" alt="endlos unreal engine studio" className="w-full rounded-2xl max-h-auto h-[400px]" />
          </div>
          <div>
            <p className='  text-justify  text-[#b6b6b6]     h-auto pb-5'>Endlos Studio is not just a service provider; we are your trusted partner in turning dreams into reality. We value collaboration, communication, and long-lasting relationships with our clients. Our team works closely with you throughout development, providing regular updates, soliciting feedback, and fine-tuning every element to align with your vision.
            </p>
            <p className='  text-justify  text-[#b6b6b6]     h-auto py-5'>As a forward-thinking studio, we are committed to innovation and continuous improvement. We stay abreast of the latest advancements in Unreal Engine technology, embracing new features and techniques that push the boundaries of what is possible. Our passion for learning and exploration drives us to deliver cutting-edge solutions that leave a lasting impression.
            </p>
            <p className='  text-justify  text-[#b6b6b6]     h-auto'>Step into our world of limitless possibilities. Explore our portfolio, witness the magic of Unreal Engine in action, and let us embark on a journey of creativity, innovation, and unparalleled experiences together. Welcome to Endlos Studio, where imagination becomes a reality with the power of Unreal Engine.
            </p>
            <div className='  text-justify  text-[#b6b6b6]     h-auto'>
              <Link href='/company/about-us'>
                <button className="mt-4 py-2 bg-black hover:bg-white text-[#b6b6b6] hover:text-black px-4  rounded-md">
                  Read More
                </button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomeImageContainer;