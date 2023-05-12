import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AlternateImageContainer from '@/components/blog-page-components/AlternateImageContainer/AlternateImageContainer'
import BlogParallaxComponent from '@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <BlogParallaxComponent />
            <AlternateImageContainer />
            <AlternateImageContainer />
            <AlternateImageContainer />
            <Footer />
        </>
    )
}

export default index