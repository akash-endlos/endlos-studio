import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax';
import PortFolioCarousel from '@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel';
import PortFolioCardsContainer from '@/components/portfolio-page-components/PortFolioCardsContainer/PortFolioCardsContainer';
import HomeProductionHouse from '@/components/home-page-components/HomeProductionHouse/HomeProductionHouse';
import bg from "../../../../public/assets/home-7-img-1.jpg";

const index = () => {

    return (
        <>
            <Navbar Navclass="bg-[#111111] text-white" />
            <div className="pt-24 bg-[#111111] text-white">
                <div >
                    <PortFolioParallax title={'Game Development'} subtitle={'Can You Handle The Truth'} />
                    <div className="flex justify-center items-center py-10">
                        <img src="/assets/home-7-img-1.jpg" />
                    </div>
                    <p className='max-w-screen-lg mx-auto py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores facere, dignissimos iure nemo voluptas ea voluptates eius rerum. Hic voluptatum quasi illum odio saepe, odit iusto sunt quis quae magni eum maxime aut minima sint aperiam quibusdam atque repudiandae quisquam quia laboriosam cupiditate incidunt fuga! Inventore aperiam eius obcaecati aspernatur recusandae voluptatibus dolores natus, vel, ullam aliquid fugiat optio fuga possimus repellat dolore quod ipsa eligendi ratione quia ad et quasi. Quidem exercitationem velit repudiandae quia numquam ipsum omnis. Quo mollitia dignissimos quam excepturi, adipisci nihil quasi inventore accusamus enim cum ipsam ab earum recusandae harum itaque quae expedita nulla quia iste laudantium, eum vitae! Atque obcaecati libero, porro modi ab hic totam aliquid ipsam at maxime molestias commodi eligendi. Cumque, eos?</p>
                    <div className="grid grid-cols-2 grid-rows-2">
                        <div className=" col-start-1 col-end-2 row-start-1 row-end-2">  <img className="w-full object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" /></div>
                        <div className=" col-start-1 col-end-2 row-start-2 row-end-3">  <img className="w-full  object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" /></div>
                        <div className=" col-start-2 col-end-3 row-start-1 row-end-3">  <img className="w-full  object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" /></div>
                    </div>
                    <div className="relative h-screen">
                        <div style={{
                            backgroundImage: `url(${bg.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            width: "100vw",
                            height: "100vh",
                        }} className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-gradient-to-b from-gray-900 to-gray-600"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='flex flex-col items-center gap-2'>
                                <p className='text-xl text-white'>FILMING CREW</p>
                                <h1 className="text-white text-4xl font-bold font-serif">MEET THE TEAM</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto max-w-screen-xl py-5  ">
                        <p className='text-center font-bold text-4xl text-white py-10'>OUR DEVELOPMENT</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10">
                        <div className=" p-4 ">
                                <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                                <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                                <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className="btn text-[#b6b6b6]">Read More</button>
                            </div>
                            <div className=" p-4 ">
                                <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                                <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                                <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className="btn text-[#b6b6b6]">Read More</button>
                            </div>
                            <div className=" p-4 ">
                                <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                                <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                                <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className="btn text-[#b6b6b6]">Read More</button>
                            </div>
                        </div>
                    </div>
                    <HomeProductionHouse />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index