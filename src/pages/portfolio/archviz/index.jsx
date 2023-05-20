import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PortFolioParallax from "@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax";
import ArchwizGallery from "@/components/portfolio-page-components/ArchwizGallery/ArchwizGallery";
import PortFolioCarousel from "@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel";

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
        <PortFolioParallax
          title={"Archviz"}
          subtitle={"Can You Handle The Truth"}
        />
        <ArchwizGallery />
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
        <PortFolioParallax
          title={"Interactive"}
          subtitle={"Can You Handle The Truth"}
        />
        <div className="flex justify-center items-center">
          <video src="/assets/archviz_interactive.mp4" controls width="100%"></video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
