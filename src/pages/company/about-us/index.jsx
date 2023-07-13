import CreativeTeam from '@/components/about-page-components/CreativeTeam/CreativeTeam'
import OurGoal from '@/components/about-page-components/OurGoalComponent/OurGoal'
import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AboutPageCarousel from '@/components/about-page-components/aboutPageCarousel/AboutPageCarousel'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect } from 'react'
import bg from "../../../../public/assets/img1.jpg";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getMetatags } from '@/redux/action/metatags/creator'
import { HeadTag } from '@/components/HeaadTag/HeadTag'
import Head from 'next/head'

const page = () => {
  const metaTags = useSelector((state) => state.allMetatags.payload);
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
<Head>
        <title> About Us - Learn about our company | Endlos Studio </title>
        <meta name="description" content=" Get to know the visionary minds behind Endlos Studio. Join us on our mission to redefine artistic boundaries today!" />
        <meta name="keywords" content=" about us, Unreal Engine, endlos studio, Virtual Production, architectural visualization" />
        <meta property="og:title" content=" About Us - Learn about our company | Endlos Studio" />
        <meta property="og:description" content=" Get to know the visionary minds behind Endlos Studio. Join us on our mission to redefine artistic boundaries today!" />
        <meta property="og:site_name" content="Endlos Studio " />
        <meta property="og:type" content="article" />
        <meta property="og:image" content=" https://endlos.studio/assets/logo.png " />
        <meta property="og:url" content="https://endlos.studio/company/about-us " />
        <meta name="twitter:title" content=" About Us - Learn about our company | Endlos Studio" />
        <meta name="twitter:description" content=" Get to know the visionary minds behind Endlos Studio. Join us on our mission to redefine artistic boundaries today!" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/company/about-us " />
        <meta name="twitter:image" content=" https://endlos.studio/assets/logo.png " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://endlos.studio/company/about-us " />
      </Head>

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
      <OurGoal />
      {/* <ParallaxImageContainer />
      <CreativeTeam /> */}
      <Footer />
    </>
  )
}

export default page