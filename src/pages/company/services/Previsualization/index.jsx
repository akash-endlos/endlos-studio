import Footer from '@/components/footer/Footer'
import HomeProductionHouse from '@/components/home-page-components/HomeProductionHouse/HomeProductionHouse'
import Navbar from '@/components/navbar/Navbar'
import PortFolioCarousel from '@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel'
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar Navclass="bg-[#111111] text-white" />
            <div className="pt-24 bg-[#111111] text-white">
                <div >
                    <PortFolioParallax title={'Pre Visualization'} subtitle={'Can You Handle The Truth'} />
                    <PortFolioCarousel />
                    <div className='flex justify-center items-center py-10 px-5'>
                        <video src='/assets/1.mp4' controls width="100%"></video>
                    </div>
                    <HomeProductionHouse />
                </div>
            </div>
            <Footer />
    </div>
  )
}

export default index