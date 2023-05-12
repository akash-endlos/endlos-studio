import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax';
import ArchwizGallery from '@/components/portfolio-page-components/ArchwizGallery/ArchwizGallery';
import PortFolioCarousel from '@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel';


const index = () => {
    const router = useRouter()
    const { id } = router.query;
    useEffect(() => {
        if(id)
        {
         const element = document.getElementById(id);
         if (element) {
             element.scrollIntoView({ behavior: "smooth" });
         }
        }
    }, [id])

    return (
        <>
            <Navbar Navclass="bg-[#111111] text-white" />
            <div className="pt-24 bg-[#111111] text-white">
                <PortFolioParallax title={'Archviz'} subtitle={'Can You Handle The Truth'} />
                <ArchwizGallery />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
                </div>

                <div id="walkthrough">
                    <PortFolioParallax title={'WalkThrough'} subtitle={'Can You Handle The Truth'} btn={true} />
                    <PortFolioCarousel />
                </div>
                <div id="interactive">
                    <PortFolioParallax title={'Interactive'} subtitle={'Can You Handle The Truth'} />
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