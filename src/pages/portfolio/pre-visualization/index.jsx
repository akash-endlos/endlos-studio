import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PortFolioParallax from "@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax";
import PortFolioCarousel from "@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel";
import PortFolioCardsContainer from "@/components/portfolio-page-components/PortFolioCardsContainer/PortFolioCardsContainer";
import HomeProductionHouse from "@/components/home-page-components/HomeProductionHouse/HomeProductionHouse";
import bg from "../../../../public/assets/img1.jpg";
import Head from "next/head";
import { CarouselData } from "@/allcontent/carouselData";

const index = () => {
  return (
    <>
     <Head>
        <title>Previsualization - Portfolio | Endlos Studio</title>
        <meta name="description" content="Explore the power of previsualization with our dynamic portfolio.Experience the magic of 3D " />
        <meta name="keywords" content="previsualization,visual storytelling" />
        <meta property="og:title" content="Previsualization - Portfolio | Endlos Studio" />
        <meta property="og:description" content="Explore the power of previsualization with our dynamic portfolio.Experience the magic of 3D" />
        <meta property="og:site_name" content="Endlos Studio" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://endlos.studio/assets/logo.png" />
        <meta property="og:url" content="https://endlos.studio/portfolio/pre-visualization" />
        <meta name="twitter:title" content="Previsualization - Portfolio | Endlos Studio" />
        <meta name="twitter:description" content="Explore the power of previsualization with our dynamic portfolio.Experience the magic of 3D " />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/portfolio/pre-visualization" />
        <meta name="twitter:image" content="https://endlos.studio/assets/logo.png" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://endlos.studio/portfolio/pre-visualization" />
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
                height: "450px",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center">
                  <h1 className=" xl:text-5xl sm:text-4xl font-bold text-white">
                    Pre Visualization
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto py-10 px-5">
            <div className="py-5">
              <h2 className="font-bold text-2xl py-4">
              	Meticulous Planning
              </h2>
              <p>
              Our work strategy in pre visualization emphasizes meticulous planning and attention to detail. We focus on understanding our client's needs and objectives, enabling us to create comprehensive pre visualization plans that encompass all aspects of the project.
              </p>
            </div>
            <div className="py-5">
              <h2 className="font-bold text-2xl py-4">
              Visual Storytelling
              </h2>
              <p>
              We emphasize the power of visual storytelling in pre visualization. Through storyboards, animatics, and 3D asset creation, we ensure that our clients can effectively communicate their narrative and pacing, allowing for informed decision-making and refining of their creative vision.
              </p>
            </div>
            <div className="py-5">
              <h2 className="font-bold text-2xl py-4">Collaboration and Feedback</h2>
              <p>
              Our work strategy encourages collaboration and feedback throughout pre visualization. We actively involve our clients, seeking their input and incorporating their ideas into the visualization. This collaborative approach ensures that the final result aligns with their vision.
              </p>
            </div>
          </div>

          <PortFolioCarousel data={CarouselData} />
          <div className="flex justify-center items-center py-10 px-5">
            <video src="/assets/1.mp4" controls width="100%"></video>
          </div>
          {/* <HomeProductionHouse /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
