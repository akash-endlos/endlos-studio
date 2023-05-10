import CreativeTeam from '@/components/about-page-components/CreativeTeam/CreativeTeam'
import OurGoal from '@/components/about-page-components/OurGoalComponent/OurGoal'
import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AboutPageCarousel from '@/components/about-page-components/aboutPageCarousel/AboutPageCarousel'
import Footer from '@/components/footer/Footer'
import HomeImageContainer from '@/components/home-page-components/HomeImageContainer/HomeImageContainer'
import HomeVideoCarousel from '@/components/home-page-components/HomeVideoCarousel/HomeVideoCarousel'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
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