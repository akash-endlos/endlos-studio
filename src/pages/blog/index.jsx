import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AlternateImageContainer from '@/components/blog-page-components/AlternateImageContainer/AlternateImageContainer'
import BlogParallaxComponent from '@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent'
import BlogRightSection from '@/components/blog-page-components/BlogRightSection/BlogRightSection'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <BlogParallaxComponent />
            <div class="grid grid-cols-1 xl:grid-cols-5 gap-4 bg-[#111111] ">
                <div class="col-span-4">
                    <AlternateImageContainer />
                    <AlternateImageContainer />
                    <AlternateImageContainer />
                </div>
                <div class="col-span-1 text-white">
                <BlogRightSection/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index