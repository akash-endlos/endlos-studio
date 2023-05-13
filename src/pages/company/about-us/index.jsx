import CreativeTeam from '@/components/about-page-components/CreativeTeam/CreativeTeam'
import OurGoal from '@/components/about-page-components/OurGoalComponent/OurGoal'
import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AboutPageCarousel from '@/components/about-page-components/aboutPageCarousel/AboutPageCarousel'
import Footer from '@/components/footer/Footer'
import HomeImageContainer from '@/components/home-page-components/HomeImageContainer/HomeImageContainer'
import HomeVideoCarousel from '@/components/home-page-components/HomeVideoCarousel/HomeVideoCarousel'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import bg from "../../../../public/assets/img1.jpg";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
                <div className="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "500px",
                }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
      <HomeImageContainer />
      <AboutPageCarousel />
      <OurGoal/>
      <ParallaxImageContainer/>
      <CreativeTeam/>
      <Footer />
    </>
  )
}

export default page