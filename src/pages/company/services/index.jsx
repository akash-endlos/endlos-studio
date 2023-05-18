import Footer from "@/components/footer/Footer";
import HomeProductionHouse from "@/components/home-page-components/HomeProductionHouse/HomeProductionHouse";
import Navbar from "@/components/navbar/Navbar";
import PortFolioCarousel from "@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel";
import PortFolioParallax from "@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax";
import React, { useEffect } from "react";
import bg from "../../../../public/assets/img1.jpg";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [id]);
  return (
    <div>
      <Navbar Navclass="bg-[#111111] text-white" />
      <div className="pt-24 bg-[#111111] text-white">
        <div>
          <div className="relative">
            <div
              className="h-screen bg-cover bg-fixed"
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "500px",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-white">
                    Services
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#111111]">
            <div className='flex flex-col gap-5 justify-center items-center text-white py-20'>
              <h1 className='text-4xl'>What Web Provide</h1>
              <p className='text-xl max-w-screen-lg text-center font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam non ea vero quas, libero voluptatibus atque ad asperiores magni</p>
            </div>
          </div>
        </div>
        <div id="servicespv">
          <div className="relative">
            <div
              className="h-screen bg-cover bg-fixed"
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "300px",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-white">
                    Pre Visualization
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#111111]">
            <div className='flex flex-col gap-5 justify-center items-center text-white py-20'>
              <h1 className='text-4xl'>  Pre Visualization</h1>
              <p className='text-xl max-w-screen-lg text-center font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam non ea vero quas, libero voluptatibus atque ad asperiores magni</p>
            </div>
          </div>
          <img className="w-full h-[500px] object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
          <div className='max-w-screen-xl mx-auto py-10'>
            <div className='py-5'>
              <h1 className='font-bold text-xl py-4'>Pre Visualization</h1>
              <p>Open, inclusive, and equal are three words that sum up the work culture at PhantomFX. Our strength lies in our people; a dedicated team of creative professionals who work together to bring alive magic on screen. Our teams have delivered on some of the craziest deadlines, without taking eyes off the high bar of quality.</p>
            </div>
            <div className='py-5'>
              <h1 className='font-bold text-xl py-4'>Virtual Production</h1>
              <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
              </p>
            </div>
            <div className='py-5'>
              <h1 className='font-bold text-md py-4'>Our Production House</h1>
              <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* new section start */}
      <div id="servicesvp">
        <div className="relative">
          <div
            className="h-screen bg-cover bg-fixed"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">
                  Virtual Production
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111]">
            <div className='flex flex-col gap-5 justify-center items-center text-white py-20'>
              <h1 className='text-4xl'>  Virtual Production</h1>
              <p className='text-xl max-w-screen-lg text-center font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam non ea vero quas, libero voluptatibus atque ad asperiores magni</p>
            </div>
          </div>
          <img className="w-full h-[500px] object-cover" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
      <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10'>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Virtual Production</h1>
            <p>Open, inclusive, and equal are three words that sum up the work culture at PhantomFX. Our strength lies in our people; a dedicated team of creative professionals who work together to bring alive magic on screen. Our teams have delivered on some of the craziest deadlines, without taking eyes off the high bar of quality.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Visual Production</h1>
            <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-md py-4'>Our Production House</h1>
            <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#111111]">
        <div className="max-w-screen-2xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 py-10">
            <div class="rounded-lg shadow-lg   w-full sm:w-auto">
              <a href="#!">
                <video
                  width="320"
                  height="240"
                  controls
                  class="w-full rounded-t-lg"
                >
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            <div class="rounded-lg shadow-lg   w-full sm:w-auto">
              <a href="#!">
                <video
                  width="320"
                  height="240"
                  controls
                  class="w-full rounded-t-lg"
                >
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            <div class="rounded-lg shadow-lg   w-full sm:w-auto">
              <a href="#!">
                <video
                  width="320"
                  height="240"
                  controls
                  class="w-full rounded-t-lg"
                >
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* new section end */}
      {/* new section start */}
      <div id="servicesgamedevelopment">
        <div className="relative">
          <div
            className="h-screen bg-cover bg-fixed"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">
                  Game Development
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111]">
            <div className='flex flex-col gap-5 justify-center items-center text-white py-20'>
              <h1 className='text-4xl'>   Game Development</h1>
              <p className='text-xl max-w-screen-lg text-center font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam non ea vero quas, libero voluptatibus atque ad asperiores magni</p>
            </div>
          </div>
          <img className="w-full h-[500px] object-cover" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
      <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10'>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Game Development</h1>
            <p>Open, inclusive, and equal are three words that sum up the work culture at PhantomFX. Our strength lies in our people; a dedicated team of creative professionals who work together to bring alive magic on screen. Our teams have delivered on some of the craziest deadlines, without taking eyes off the high bar of quality.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Visual Production</h1>
            <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-md py-4'>Our Production House</h1>
            <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
            </p>
          </div>
        </div>
      </div>
      {/* new section end */}

      {/* new section start */}
      {/* <div id="serviceswalktrough">
        <div className="relative">
          <div
            className="h-screen bg-cover bg-fixed"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">Walktrough</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111]">
        <div className="max-w-screen-2xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 py-10">
            <div class="rounded-lg shadow-lg   w-full sm:w-auto">
              <a href="#!">
                <video
                  width="320"
                  height="240"
                  controls
                  class="w-full rounded-t-lg"
                >
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            <div class="rounded-lg shadow-lg   w-full sm:w-auto">
              <a href="#!">
                <video
                  width="320"
                  height="240"
                  controls
                  class="w-full rounded-t-lg"
                >
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            <div class="rounded-lg shadow-lg   w-full sm:w-auto">
              <a href="#!">
                <video
                  width="320"
                  height="240"
                  controls
                  class="w-full rounded-t-lg"
                >
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
          </div>
        </div>
      </div> */}
       <div id="serviceswalktrough">
        <div className="relative">
          <div
            className="h-screen bg-cover bg-fixed"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">
                  WalkThrough
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111]">
            <div className='flex flex-col gap-5 justify-center items-center text-white py-20'>
              <h1 className='text-4xl'> WalkThrough</h1>
              <p className='text-xl max-w-screen-lg text-center font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam non ea vero quas, libero voluptatibus atque ad asperiores magni</p>
            </div>
          </div>
          <img className="w-full h-[500px] object-cover" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
      <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10'>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Game Development</h1>
            <p>Open, inclusive, and equal are three words that sum up the work culture at PhantomFX. Our strength lies in our people; a dedicated team of creative professionals who work together to bring alive magic on screen. Our teams have delivered on some of the craziest deadlines, without taking eyes off the high bar of quality.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Visual Production</h1>
            <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-md py-4'>Our Production House</h1>
            <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
            </p>
          </div>
        </div>
      </div>
      {/* new section end */}
      {/* new section start */}
      <div id="servicesarchviz">
        <div className="relative">
          <div
            className="h-screen bg-cover bg-fixed"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">Archviz</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="z-30 relative items-center justify-center w-full h-full overflow-auto">
        <div
          class="inset-0 h-screen bg-cover bg-center"
        // style={{
        //   backgroundImage: "https://wallpapercave.com/wp/wp6689710.jpg",
        // }}
        ></div>
        <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
        <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div
            class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
          // style={{
          //   backgroundImage: "https://wallpapercave.com/wp/wp6689710.jpg",
          // }}
          >
            <div class="grid grid-cols-12 gap-1">
              <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                  <p class="italic text-white text-xl md:text-4xl lg:text-4xl uppercase text-center  font-semibold ">
                    Virtual Reality Change The Future
                  </p>
                </div>
                <div class="text-gray-400 font-semibold text-xl mb-4">Archviz</div>
                <div class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                <div class="relative bg-[#111111] h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                  <div class="p-8">
                    <p class="text-white text-xs md:text-sm lg:text-xl mb-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia sequi, ea aperiam sunt vitae possimus totam commodi enim veniam debitis nihil provident perferendis, facere doloribus alias hic aliquid velit. Officiis deleniti placeat consequatur impedit exercitationem tempora harum sunt tempora harum sunt tempora harum sunt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10'>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Game Development</h1>
            <p>Open, inclusive, and equal are three words that sum up the work culture at PhantomFX. Our strength lies in our people; a dedicated team of creative professionals who work together to bring alive magic on screen. Our teams have delivered on some of the craziest deadlines, without taking eyes off the high bar of quality.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Visual Production</h1>
            <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-md py-4'>Our Production House</h1>
            <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-class creature animation quality.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#111111]">
        <div class="grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 gap-4 py-10">
          <div class="mx-auto px-4  max-w-xl ">
            <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
              <div class="md:flex-shrink-0">
                <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="mountains" class="w-full h-64 rounded-lg rounded-b-none" />
              </div>
              <div class="px-4 py-2 mt-2">
                <h2 class="font-bold text-2xl text-gray-800 tracking-normal">My Amazing Journey to the Mountains.</h2>
                <p class="text-sm text-gray-700 px-2 mr-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...
                </p>
                <div class="flex items-center justify-between mt-2 mx-6">
                  <a href="#" class="text-blue-500 text-xs -ml-3">Show More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto px-4  max-w-xl ">
            <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
              <div class="md:flex-shrink-0">
                <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="mountains" class="w-full h-64 rounded-lg rounded-b-none" />
              </div>
              <div class="px-4 py-2 mt-2">
                <h2 class="font-bold text-2xl text-gray-800 tracking-normal">My Amazing Journey to the Mountains.</h2>
                <p class="text-sm text-gray-700 px-2 mr-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...
                </p>
                <div class="flex items-center justify-between mt-2 mx-6">
                  <a href="#" class="text-blue-500 text-xs -ml-3">Show More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto px-4  max-w-xl ">
            <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
              <div class="md:flex-shrink-0">
                <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="mountains" class="w-full h-64 rounded-lg rounded-b-none" />
              </div>
              <div class="px-4 py-2 mt-2">
                <h2 class="font-bold text-2xl text-gray-800 tracking-normal">My Amazing Journey to the Mountains.</h2>
                <p class="text-sm text-gray-700 px-2 mr-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...
                </p>
                <div class="flex items-center justify-between mt-2 mx-6">
                  <a href="#" class="text-blue-500 text-xs -ml-3">Show More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto px-4  max-w-xl ">
            <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
              <div class="md:flex-shrink-0">
                <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="mountains" class="w-full h-64 rounded-lg rounded-b-none" />
              </div>
              <div class="px-4 py-2 mt-2">
                <h2 class="font-bold text-2xl text-gray-800 tracking-normal">My Amazing Journey to the Mountains.</h2>
                <p class="text-sm text-gray-700 px-2 mr-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...
                </p>
                <div class="flex items-center justify-between mt-2 mx-6">
                  <a href="#" class="text-blue-500 text-xs -ml-3">Show More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* new section end */}
      <Footer />
    </div>
  );
};

export default index;
