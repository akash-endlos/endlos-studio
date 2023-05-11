import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax';
import PortFolioCarousel from '@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel';
import PortFolioCardsContainer from '@/components/portfolio-page-components/PortFolioCardsContainer/PortFolioCardsContainer';
import HomeProductionHouse from '@/components/home-page-components/HomeProductionHouse/HomeProductionHouse';


const index = () => {
    const router = useRouter()
    const { id } = router.query;
    useEffect(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [id])

    return (
        <>
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
        </>
    )
}

export default index