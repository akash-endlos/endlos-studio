import React from 'react'
import bg from "../../../../public/assets/img1.jpg";

const BlogParallaxComponent = ({title}) => {
    return (
        <>
            <div className="relative">
                <div className="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "500px",
                }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white max-w-screen-lg leading-snug">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogParallaxComponent