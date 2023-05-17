import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax';
import PortFolioCarousel from '@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel';
import PortFolioCardsContainer from '@/components/portfolio-page-components/PortFolioCardsContainer/PortFolioCardsContainer';


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
                <PortFolioParallax title={'Virtual production'} subtitle={'Can You Handle The Truth'} nexttitle={'Types Of Virtual Production'} />
                <PortFolioCardsContainer/>
                  <div className='max-w-screen-xl mx-auto'>
                  <div className='py-10'>
                  <video src='/assets/1.mp4' controls width="100%"></video>
                  <div className='text-xl py-5 font-serif text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem voluptas sunt dolores reprehenderit, quo saepe earum nesciunt magnam officiis incidunt totam dolorem suscipit veniam temporibus adipisci molestias ipsa rem. Odit optio rerum atque neque nulla ipsam quaerat reiciendis hic perferendis, et harum veritatis, architecto quidem eveniet
                  </div>
                  </div>
                  </div>
                <div id="environment">
                    <PortFolioParallax title={'Environment'} subtitle={'Can You Handle The Truth'} btn={true} />
                    <div className='flex justify-center items-center'>
                        <video src='/assets/1.mp4' controls width="100%"></video>
                    </div>
                  
                </div>
                <div id="arvr">
                    <PortFolioParallax title={'AR & VR'} subtitle={'Can You Handle The Truth'} />
                    <div className='flex justify-center items-center'>
                        <video src='/assets/1.mp4' controls width="100%"></video>
                    </div>
                    <PortFolioCarousel />
                    <div className='max-w-screen-xl mx-auto'>
                  <div className='py-10'>
                  <video src='/assets/1.mp4' controls width="100%"></video>
                  <div className='text-xl py-5 font-serif text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem voluptas sunt dolores reprehenderit, quo saepe earum nesciunt magnam officiis incidunt totam dolorem suscipit veniam temporibus adipisci molestias ipsa rem. Odit optio rerum atque neque nulla ipsam quaerat reiciendis hic perferendis, et harum veritatis, architecto quidem eveniet
                  </div>
                  </div>
                  </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index