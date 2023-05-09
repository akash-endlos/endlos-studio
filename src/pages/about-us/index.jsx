import Footer from '@/components/footer/Footer'
import HomeImageContainer from '@/components/home-page-components/HomeImageContainer/HomeImageContainer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HomeImageContainer />
      <Footer />
    </>
  )
}

export default page