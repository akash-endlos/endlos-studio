import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import bg from "../../../../public/assets/img1.jpg";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        setTimeout(() => {
          const scrollPosition = sectionElement.offsetTop;
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [id]);
  

  return (
    <>
      <Navbar Navclass="bg-[#111111] text-white" />
      <div className="pt-24 bg-[#111111] text-white">
      <div className="relative">
                <div className="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "450px",
                }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">Portfolio</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black flex justify-center items-center py-10 p-5">
          <div className="inset-0 flex justify-center items-center">
            <div className="text-center">
              {/* <h2 className="text-4xl font-bold text-white">
                We Show What We Done
              </h2> */}
            </div>
          </div>
        </div>
      <div className="relative">
                <div className="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "300px",
                }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">Archviz</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10 px-5'>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Attention to Detail</h1>
            <p>Our work strategy in architecture visualization emphasizes a meticulous approach to detail. We focus on accurately representing architectural designs, materials, lighting, and spatial relationships to create realistic and immersive visualizations.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Effective Communication</h1>
            <p>We prioritize effective communication in architecture visualization. We work closely with architects, designers, and stakeholders to understand their vision and ensure that the final visualization effectively communicates the design intent to clients, investors, and the general public.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Interactive Elements</h1>
            <p>Our work strategy incorporates interactive elements in architecture visualization, such as virtual tours and walkthroughs. By providing interactive experiences, we enable clients to engage with the design, explore spaces, and make informed decisions about the project.
            </p>
          </div>
        </div>
      </div>
        {/* <ArchwizGallery /> */}
      </div>

      {/* <div id="archvizwalkthrough">
        <PortFolioParallax
          title={"WalkThrough"}
          subtitle={"Can You Handle The Truth"}
          btn={true}
        />
        <PortFolioCarousel />
      </div> */}
      <div id="archvizinteractive">
      <div className="relative">
                <div className="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "300px",
                }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">Interactive Archviz</h1>
                            {/* <p className="mt-4 text-lg text-white font-serif">{subtitle}</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#111111] text-white">
        <div className='max-w-screen-xl mx-auto py-10 px-5'>
          {/* <h2 className="font-bold text-2xl">Key features:</h2> */}
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>User-Centric Design </h1>
            <p>Our work strategy in interactive experiences focuses on user-centric design. We prioritize understanding the target audience's needs to create engaging and intuitive user experiences across various platforms, such as virtual reality (VR), augmented reality (AR), and interactive installations.</p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Immersive Interactivity</h1>
            <p>We strive to create immersive interactive experiences that captivate and engage users. By leveraging advanced technologies, we develop interactive applications and installations that give users a sense of presence and immersion, allowing them to participate in the experience actively.ts.
            </p>
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-xl py-4'>Iterative Development</h1>
            <p>Our work strategy in interactive experiences embraces an iterative development process. We continuously gather user feedback, conduct testing, and make improvements to ensure the final product delivers a seamless and enjoyable interactive experience.
            </p>
          </div>
        </div>
      </div>
        <div className="flex justify-center items-center">
          <video src="/assets/archviz_interactive.mp4" controls width="100%"></video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
