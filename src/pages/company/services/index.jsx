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
              <h1 className='text-4xl font-bold'>What We Provide</h1>
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
          <img className="w-full h-[500px] object-cover mb-2" src="/assets/service_pv.jpg" alt="Card Image" />
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
              <p className='text-xl max-w-screen-2xl leading-10  font-serif text-justify'>Experience the future of filmmaking with our virtual production services. Harnessing cutting-edge technology and techniques, we seamlessly integrate physical and digital elements to create immersive virtual environments and deliver stunning real-time visual effects. Our virtual camera systems allow for dynamic shots in virtual sets and locations, while our real-time rendering and compositing capabilities provide instant feedback and iteration during the production process. Collaborate with our talented filmmakers, artists, and technicians to bring your creative visions to life like never before.</p>
            </div>
          </div>
          <img className="w-full h-[500px] object-cover" src="/assets/service_vp.jpg" alt="Card Image" />
      <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10'>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Immersive Virtual Environments</h1>
            <p>Transport your audience to captivating virtual worlds with our state-of-the-art technology.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Real-Time Visual Effects</h1>
            <p>Enhance storytelling and production efficiency with instant feedback and on-the-fly adjustments.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-md py-4'>Virtual Camera Systems</h1>
            <p>Capture dynamic shots in virtual sets and locations for added realism and creative freedom.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-md py-4'>Seamless Integration</h1>
            <p>Achieve a perfect blend of physical and digital elements for a cohesive and visually stunning final product.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-md py-4'>Collaborative Approach</h1>
            <p>Work closely with our team to bring your creative vision to life, leveraging the expertise of filmmakers, artists, and technicians.
            </p>
          </div>
        </div>
      </div>
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
          <img className="w-full h-[500px] object-cover" src="/assets/service_gm.jpg" alt="Card Image" />
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
          <video class="w-full opacity-100" src='../assets/Service Walkthrough.mp4' autoPlay muted loop></video>
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
      
        ></div>
        <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
        <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div
            class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
          
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
      <Footer />
    </div>
  );
};

export default index;
