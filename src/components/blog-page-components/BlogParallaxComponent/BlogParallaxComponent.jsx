import React from 'react'
import bg from "../../../../public/assets/img1.jpg";

const BlogParallaxComponent = () => {
    return (
        <>
            <div class="relative">
                <div class="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "500px",
                }}>
                    <div class="absolute inset-0 bg-black opacity-60"></div>
                    <div class="absolute inset-0 flex justify-center items-center">
                        <div class="text-center">
                            <h1 class="text-5xl font-bold text-white">Blog</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogParallaxComponent