import React from 'react'
import bg from "../../../../public/assets/about_parallax.jpg";

const ParallaxImageContainer = () => {
    return (
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
                {/* <p className='text-xl text-white'>FILMING CREW</p> */}
                <h2 className="text-white text-3xl font-bold font-serif text-center">MEET THE TEAM</h2>
                </div>
            </div>
        </div>
    )
}

export default ParallaxImageContainer