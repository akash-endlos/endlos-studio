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
      <HomeVideoCarousel />
      <Footer />
    </>
  )
}

export default page