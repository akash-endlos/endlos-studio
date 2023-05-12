import React from 'react'
import bg from "../../../../public/assets/img1.jpg";

const PortFolioParallax = ({ title, subtitle,btn }) => {
    return (
        <>
            <div className="relative">
                <div className="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "300px",
                }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">{title}</h1>
                            <p className="mt-4 text-lg text-white font-serif">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black flex justify-center items-center max-h-max md:h-80 lg:h-96 p-5">
                <div className="inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-white">CAST & CREW</h1>
                        <p className="mt-4 text-lg text-white font-serif max-w-screen-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem voluptas sunt dolores reprehenderit, quo saepe earum nesciunt magnam officiis incidunt totam dolorem suscipit veniam temporibus adipisci molestias ipsa rem. Odit optio rerum atque neque nulla ipsam quaerat reiciendis hic perferendis, et harum veritatis, architecto quidem eveniet</p>
                        {btn && <button className="px-16 uppercase py-3 border-2 border-white text-white my-10 font-semibold tracking-widest">
                            Official Trailer
                        </button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortFolioParallax