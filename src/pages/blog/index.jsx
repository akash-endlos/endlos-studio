import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AlternateImageContainer from '@/components/blog-page-components/AlternateImageContainer/AlternateImageContainer'
import BlogParallaxComponent from '@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent'
import BlogRightSection from '@/components/blog-page-components/BlogRightSection/BlogRightSection'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect, useState } from 'react'

const index = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const navLinksContainer = document.querySelector('.nav-links-container');

        function handleScroll() {
            if (window.scrollY >= navbar?.offsetHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Navbar />
            <BlogParallaxComponent />
            <div class="grid grid-cols-1 xl:grid-cols-5 gap-4 bg-[#111111] ">
                <div class="col-span-4">
                    <div className={`nav-links-container transition ease-in-out delay-150 ${isFixed ? 'fixed top-20 z-10 ' : ''} bg-[#111111] w-full py-2 shadow-lg transition duration-1000 ease-in-out transform z-50`}>
                        <div className='text-white flex justify-center items-center flex-wrap gap-5 my-2'>
                            <div className='py-2 rounded-md cursor-pointer px-6 hover:bg-gray-200 hover:text-[#111111]'>
                                Popular News
                            </div>
                            <div className='py-2 rounded-md cursor-pointer px-6 hover:bg-gray-200 hover:text-[#111111]'>
                                Guide
                            </div>
                            <div className='py-2 rounded-md cursor-pointer px-6 hover:bg-gray-200 hover:text-[#111111]'>
                                What's New
                            </div>
                            <div className='py-2 rounded-md cursor-pointer px-6 hover:bg-gray-200 hover:text-[#111111]'>
                                Client Feedback
                            </div>
                        </div>
                    </div>

                    <AlternateImageContainer />
                    <AlternateImageContainer />
                    <AlternateImageContainer />
                </div>
                <div class="col-span-1 text-white">
                    <BlogRightSection />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index