import React from 'react'
import bg from "../../../../public/assets/img1.jpg";
import BlogGuideCarousel from '../BlogGuideCarousel/BlogGuideCarousel';

const BlogGuideSection = () => {
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
                            <h1 class="text-5xl font-bold text-white">Guides</h1>
                        </div>
                    </div>
                </div>
                <div class="bg-black flex justify-center items-center max-h-max md:h-40 lg:h-40 p-5">
                <div class="inset-0 flex justify-center items-center">
                    <div class="text-center">
                        <h1 class="text-5xl font-bold text-white">Tutorials</h1>
                    </div>
                </div>
            </div>
            </div>
            <BlogGuideCarousel/>
        </>
    )
}

export default BlogGuideSection