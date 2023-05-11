import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax';
import PortFolioCarousel from '@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel';


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
                <PortFolioParallax title={'Virtual production'} subtitle={'Can You Handle The Truth'} />

                <div id="environment">
                    <PortFolioParallax title={'Environment'} subtitle={'Can You Handle The Truth'} btn={true} />
                    <PortFolioCarousel />
                </div>
                <div id="arvr">
                    <PortFolioParallax title={'AR & VR'} subtitle={'Can You Handle The Truth'} />
                    <div className='flex justify-center items-center'>
                        <video src='/assets/1.mp4' controls width="100%"></video>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index