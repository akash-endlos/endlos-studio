import CreativeTeam from '@/components/about-page-components/CreativeTeam/CreativeTeam'
import OurGoal from '@/components/about-page-components/OurGoalComponent/OurGoal'
import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AboutPageCarousel from '@/components/about-page-components/aboutPageCarousel/AboutPageCarousel'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect } from 'react'
import bg from "../../../../public/assets/img1.jpg";
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getMetatags } from '@/redux/action/metatags/creator'
import { HeadTag } from '@/components/HeaadTag/HeadTag'

const page = () => {
  const path = useRouter().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (window) {
      const host = window.location.host;
      const hostWithPath = `${host}${path}`;
      dispatch(getMetatags("SET_META_TAGS", hostWithPath));
    }
  }, [dispatch, path]);
  return (
    <>
    <HeadTag/>
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
      {/* <AboutPageCarousel /> */}
      <OurGoal/>
      <ParallaxImageContainer/>
      <CreativeTeam/>
      <Footer />
    </>
  )
}

export default page