import React from 'react'
import bg from "../../../../public/assets/img1.jpg";

const PortFolioParallax = ({ title, subtitle }) => {
    return (
        <>
            <div class="relative">
                <div class="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "300px",
                }}>
                    <div class="absolute inset-0 bg-black opacity-60"></div>
                    <div class="absolute inset-0 flex justify-center items-center">
                        <div class="text-center">
                            <h1 class="text-5xl font-bold text-white">{title}</h1>
                            <p class="mt-4 text-lg text-white font-serif">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-black flex justify-center items-center max-h-max md:h-80 lg:h-96 p-5">
                <div class="inset-0 flex justify-center items-center">
                    <div class="text-center">
                        <h1 class="text-5xl font-bold text-white">{title}</h1>
                        <p class="mt-4 text-lg text-white font-serif max-w-screen-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem voluptas sunt dolores reprehenderit, quo saepe earum nesciunt magnam officiis incidunt totam dolorem suscipit veniam temporibus adipisci molestias ipsa rem. Odit optio rerum atque neque nulla ipsam quaerat reiciendis hic perferendis, et harum veritatis, architecto quidem eveniet</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortFolioParallax