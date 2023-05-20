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
              {/* <p className='text-xl max-w-screen-lg text-center font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam non ea vero quas, libero voluptatibus atque ad asperiores magni</p> */}
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
              <h1 className='text-4xl font-bold'>  Pre Visualization</h1>
              <p className='text-xl max-w-screen-lg text-justify font-serif'>Our work strategy in pre-visualization emphasizes meticulous planning and attention to detail. We focus on understanding our client's needs and objectives, enabling us to create comprehensive pre-visualization plans that encompass all aspects of the project.</p>
            </div>
          </div>
          <img className="w-full h-[500px] object-cover mb-2" src="/assets/service_pv.jpg" alt="Card Image" />
          <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10'>
          <h2 className="font-bold text-2xl">Key features:</h2>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Visual Storytelling</h1>
            <p>We emphasize the power of visual storytelling in pre-visualization. </p>
          </div>
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
              <h1 className='text-4xl font-bold'>  Virtual Production</h1>
              <p className='text-xl max-w-screen-xl leading-10 px-5  font-serif text-justify'>Experience the future of filmmaking with our virtual production services. Harnessing cutting-edge technology and techniques, we seamlessly integrate physical and digital elements to create immersive virtual environments and deliver stunning real-time visual effects. Our virtual camera systems allow for dynamic shots in virtual sets and locations, while our real-time rendering and compositing capabilities provide instant feedback and iteration during the production process. Collaborate with our talented filmmakers, artists, and technicians to bring your creative visions to life like never before.</p>
            </div>
          </div>
          <img className="w-full h-[500px] object-cover" src="/assets/service_vp.jpg" alt="Card Image" />
      <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10'>
          <h2 className="font-bold text-2xl">Key features:</h2>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Immersive Virtual Environments </h1>
            <p>Transport your audience to captivating virtual worlds with our state-of-the-art technology.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Real-Time Visual Effects</h1>
            <p>Enhance storytelling and production efficiency with instant feedback and on-the-fly adjustments.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Virtual Camera Systems</h1>
            <p>Capture dynamic shots in virtual sets and locations for added realism and creative freedom.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Seamless Integration</h1>
            <p>Achieve a perfect blend of physical and digital elements for a cohesive and visually stunning final product.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Collaborative Approach</h1>
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
              <p className='text-xl max-w-screen-xl leading-10 text-justify font-serif'>Embark on a thrilling gaming journey with our comprehensive game development services. From concept to launch and beyond, we specialize in creating immersive and memorable gaming experiences across platforms. With a focus on real-time 3D graphics, physics simulations, multiplayer functionality, and captivating game design, our team of experts brings your game ideas to life, ensuring hours of entertainment for players.</p>
            </div>
          </div>
          <img className="w-full h-[500px] object-cover" src="/assets/service_gm.jpg" alt="Card Image" />
      <div className="bg-[#111111] text-white">
      <div className='max-w-screen-xl mx-auto py-10'>
          <h2 className="font-bold text-2xl">Key features:</h2>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Full-Cycle Development </h1>
            <p>From concept ideation and design to programming, testing, and launch, we handle every aspect of game development.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Cross-Platform Compatibility</h1>
            <p>Reach a wider audience by developing games for consoles, PCs, and mobile devices.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Real-Time 3D Graphics</h1>
            <p>Immerse players in visually stunning worlds with high-quality graphics and seamless animations.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Multiplayer Functionality</h1>
            <p>Foster social interaction and competitiveness with multiplayer and online gameplay features.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Engaging Game Design</h1>
            <p>Craft compelling stories, levels, and characters to deliver captivating and memorable gaming experiences.
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
                Architecture Visualization
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111]">
            <div className='flex flex-col gap-5 justify-center items-center text-white py-20'>
              <h1 className='text-4xl'> Architecture Visualization</h1>
              <p className='text-xl max-w-screen-lg text-justify font-serif'>We specialize in photorealistic renderings and animations that showcase every detail of your project. We ensure your vision is brought to life with stunning realism. Our clients can experience spaces before construction with interactive virtual tours and walkthroughs.</p>
            </div>
          </div>
          <video class="w-full opacity-100" src='../assets/Service Walkthrough.mp4' autoPlay muted loop></video>
      <div className="bg-[#111111] text-white">
      <div className='max-w-screen-xl mx-auto py-10'>
          <h2 className="font-bold text-2xl">Key features:</h2>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Full-Cycle Development </h1>
            <p>Showcase your architectural designs with lifelike visuals that capture every detail.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Accurate Representation</h1>
            <p>Highlight materials, lighting, and spatial relationships to create realistic visualizations.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Interactive Archviz Virtual Production</h1>
            <p>Our platform offers interactive virtual tours allowing clients to explore and experience spaces virtually while facilitating real-time design changes and customization options during client interactions.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Effective Communication</h1>
            <p>Convey design intent to stakeholders, investors, and the general public, fostering understanding and support.
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
                <h1 className="text-5xl font-bold text-white">Interactive Archviz</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111111]">
            <div className='flex flex-col gap-5 justify-center items-center text-white py-20'>
              <h1 className='text-4xl'>Interactive Archviz</h1>
              <p className='text-xl max-w-screen-lg text-justify font-serif'>Engage and captivate our audience with interactive experiences that push the boundaries of technology and creativity. Our interactive services cover various applications, including virtual reality (VR) and augmented reality (AR) experiences, custom installations for events and exhibitions, and multi-platform development for web and mobile. With our expertise in user interface (UI) and user experience (UX) design, we create intuitive and enjoyable interactive experiences that leave a lasting impression.</p>
            </div>
          </div>
    

      <div className="bg-[#111111] text-white">
      <div className='max-w-screen-xl mx-auto py-10'>
          <h2 className="font-bold text-2xl">Key features:</h2>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Immersive VR/AR Experiences</h1>
            <p>Dive into virtual worlds or overlay digital content in the real world for captivating interactive adventures.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Custom Installations</h1>
            <p>Create interactive exhibits and installations that mesmerize audiences and make a lasting impact.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Multi-Platform Development</h1>
            <p>Reach audiences on web and mobile platforms, ensuring wider accessibility and engagement.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Seamless UI/UX Design</h1>
            <p>Craft intuitive, user-friendly interfaces for seamless interaction and enjoyable experiences.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Innovative Technology</h1>
            <p>Stay at the forefront of emerging technologies, pushing the boundaries of interactivity and engagement.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
