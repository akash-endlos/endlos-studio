import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PortFolioParallax from "@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax";
import PortFolioCarousel from "@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel";
import PortFolioCardsContainer from "@/components/portfolio-page-components/PortFolioCardsContainer/PortFolioCardsContainer";
import bg from "../../../../public/assets/write_us_bg.jpg";

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
    <>
      <Navbar Navclass="bg-[#111111] text-white" />
      <div className="pt-24 bg-[#111111] text-white">
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
                <h2 className="text-5xl font-bold text-white">
                  Virtual Production
                </h2>
                {/* <p className="mt-4 text-lg text-white ">{subtitle}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black flex justify-center items-center py-10 p-5">
          <div className="inset-0 flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">
                Types Of Virtual Production
              </h3>
            </div>
          </div>
        </div>
        <PortFolioCardsContainer />
        <div className="max-w-screen-xl mx-auto">
          <div className="py-10">
            <video src="/assets/1.mp4" controls width="100%"></video>
            <div className="text-xl py-5  text-justify px-5">
              {/* <h2 className="font-bold text-2xl">Key features:</h2> */}
              <div className="py-5">
                <h3 className="font-bold text-2xl py-4">
                  Technological Expertise
                </h3>
                <p>
                  Our company's work strategy in virtual production revolves
                  around staying up to date with the latest advancements in
                  technology and tools. We invest in cutting-edge equipment and
                  software to ensure we can deliver high-quality virtual
                  production experiences.
                </p>
              </div>
              <div className="py-5">
                <h3 className="font-bold text-2xl py-4">
                  Collaborative Approach
                </h3>
                <p>
                  Collaboration is at the core of our work strategy. We work
                  closely with filmmakers, artists, and technicians to
                  understand their creative vision and goals. We ensure seamless
                  integration of physical and digital elements through open
                  communication and teamwork, bringing their ideas to life.
                </p>
              </div>
              <div className="py-5">
                <h3 className="font-bold text-2xl py-4">Iterative Process</h3>
                <p>
                  We follow an iterative process in virtual production, allowing
                  for continuous refinement and improvement. By leveraging
                  real-time rendering and compositing techniques, we can provide
                  instant feedback and make adjustments on the fly, ensuring the
                  final product meets the desired standards.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="environment">
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
                  <h3 className="text-4xl font-bold text-white">Virtual Production Environment Design</h3>
                  {/* <p className="mt-4 text-lg text-white ">{subtitle}</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black flex justify-center items-center max-h-auto py-16 px-5">
            <div className="inset-0 flex justify-center items-center">
              <div className="text-center">
                {/* <h3 className="text-5xl font-bold text-white">Environment</h3> */}
                <p className="mt-4 text-lg text-white  max-w-screen-xl text-justify">
                Immerse yourself in our portfolio of virtual production environment designs, showcasing our expertise in creating realistic and captivating virtual worlds for film, television, and other visual media.
                </p>
                <p className="mt-4 text-lg text-white  max-w-screen-xl text-justify">
                Explore meticulously crafted virtual sets and locations seamlessly blending physical and digital elements, enhancing storytelling and production efficiency. Our environment designs bring narratives to life with stunning visuals, dynamic lighting, and intricate details.
                </p>
                <p className="mt-4 text-lg text-white  max-w-screen-xl text-justify">
                Witness the power of virtual production as we showcase our ability to create diverse environments, from realistic urban landscapes and historical settings to imaginative fantasy realms and futuristic worlds.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <video src="/assets/1.mp4" controls width="100%"></video>
          </div>
        </div>
        <div id="arvr">
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
                  <h3 className="text-4xl font-bold text-white">AR and VR Environment Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black flex justify-center items-center max-h-max md:h-80 lg:h-96 p-5">
            <div className="inset-0 flex justify-center items-center">
              <div className="text-center">
                <p className="mt-4 text-lg text-white  max-w-screen-xl text-justify">
                Step into augmented reality (AR) and virtual reality (VR) with our portfolio of environment designs. Experience interactive and immersive environments that bridge the gap between the real and virtual worlds.
                </p>
                <p className="mt-4 text-lg text-white  max-w-screen-xl text-justify">
                Discover our AR applications that overlay digital content onto the physical environment, offering informative and engaging experiences. From interactive museum exhibits to captivating AR gaming experiences, our environment designs blend virtual elements seamlessly with the real world.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <video src="/assets/1.mp4" controls width="100%"></video>
          </div>
          <PortFolioCarousel />
          <div className="max-w-screen-xl mx-auto">
            <div className="py-10">
              <video src="/assets/1.mp4" controls width="100%"></video>
              <div className="text-xl py-5  text-justify px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam exercitationem voluptas sunt dolores reprehenderit,
                quo saepe earum nesciunt magnam officiis incidunt totam dolorem
                suscipit veniam temporibus adipisci molestias ipsa rem. Odit
                optio rerum atque neque nulla ipsam quaerat reiciendis hic
                perferendis, et harum veritatis, architecto quidem eveniet
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
