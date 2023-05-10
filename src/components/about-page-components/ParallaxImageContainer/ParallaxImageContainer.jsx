import React from 'react'
import bg from "../../../../public/assets/home-7-img-1.jpg";

const ParallaxImageContainer = () => {
    return (
        <div class="relative h-screen">
            <div style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
            }} class="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-gradient-to-b from-gray-900 to-gray-600"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div className='flex flex-col items-center gap-2'>
                <p className='text-xl text-white'>FILMING CREW</p>
                <h1 class="text-white text-4xl font-bold font-serif">MEET THE TEAM</h1>
                </div>
            </div>
        </div>
    )
}

export default ParallaxImageContainer