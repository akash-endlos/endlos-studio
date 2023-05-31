import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PortFolioParallax from "@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax";
import PortFolioCarousel from "@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel";
import PortFolioCardsContainer from "@/components/portfolio-page-components/PortFolioCardsContainer/PortFolioCardsContainer";
import HomeProductionHouse from "@/components/home-page-components/HomeProductionHouse/HomeProductionHouse";
import bg from "../../../../public/assets/game-development.jpg";
import Head from "next/head";

const index = () => {
  return (
    <>
    <Head>
        <title>Game Development - Portfolio | Endlos Studio</title>
        <meta name="description" content="Dive into our extraordinary Game Development portfolio.Explore rich and immersive worlds, thrilling gameplay and cutting-edge graphics." />
        <meta name="keywords" content="Game Development,unreal engine" />
        <meta property="og:title" content="Game Development - Portfolio | Endlos Studio" />
        <meta property="og:description" content="Dive into our extraordinary Game Development portfolio.Explore rich and immersive worlds, thrilling gameplay and cutting-edge graphics." />
        <meta property="og:site_name" content="Endlos Studio" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://endlos.studio/assets/logo.png" />
        <meta property="og:url" content="https://endlos.studio/portfolio/game-development" />
        <meta name="twitter:title" content="Game Development - Portfolio | Endlos Studio" />
        <meta name="twitter:description" content="Dive into our extraordinary Game Development portfolio.Explore rich and immersive worlds, thrilling gameplay and cutting-edge graphics." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/portfolio/game-development" />
        <meta name="twitter:image" content="https://endlos.studio/assets/logo.png" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://endlos.studio/portfolio/game-development" />
      </Head>
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
                    Game Development
                  </h1>
                  {/* <p className="mt-4 text-lg text-white font-serif">
                    Can You Handle The Truth
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-10  px-10">
            <img src="/assets/gd-1.jpg" className="h-[650px] rounded-xl w-full" alt="Card Image" />
          </div>
          <div className="max-w-screen-full mx-auto py-10 px-10">
            {/* <h2 className="font-bold text-2xl">Key features:</h2> */}
            <div className="py-5">
              <h2 className="font-bold text-2xl py-4">Creative Conceptualization</h2>
              <p>
              Our work strategy in game development begins with creative conceptualization. We collaborate closely with our clients to understand their game vision, target audience, and desired gameplay mechanics, ensuring a solid foundation for the development process.
              </p>
            </div>
            <div className="py-5">
              <h2 className="font-bold text-2xl py-4">Iterative Development and Testing</h2>
              <p>
              We follow an iterative and testing approach in game development. By building prototypes, conducting playtesting, and gathering feedback, we refine the gameplay, mechanics, and overall user experience to create captivating and enjoyable games.
              </p>
            </div>
            <div className="py-5">
              <h2 className="font-bold text-2xl py-4">
              Cross-Platform Compatibility
              </h2>
              <p>
              Our work strategy emphasizes cross-platform compatibility. We develop games that can be played across multiple platforms, including consoles, PCs, and mobile devices, ensuring maximum reach and accessibility for the target audience.
              </p>
            </div>
            <div className="py-5">
              <h2 className="font-bold text-2xl py-4">
              Quality Assurance
              </h2>
              <p>
              Quality assurance is an integral part of our work strategy in game development. We conduct rigorous testing and debugging to ensure the final product meets the highest performance, functionality, and user satisfaction standards.
              </p>
            </div>

            <div className="grid grid-cols-2 pt-10">
              <img
                className="w-full object-cover"
                src="/assets/gd-2.jpg"
                alt="Card Image"
              />
              <img
                className="w-full  object-cover "
                src="/assets/gd-3.jpg"
                alt="Card Image"
              />
              <img
                className="w-full  object-cover "
                src="/assets/gd-4.jpg"
                alt="Card Image"
              />
              <img
                className="w-full  object-cover "
                src="/assets/gd-5.jpg"
                alt="Card Image"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
