import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AlternateImageContainer from '@/components/blog-page-components/AlternateImageContainer/AlternateImageContainer'
import BlogGuideSection from '@/components/blog-page-components/BlogGuidesSection/BlogGuideSection'
import BlogParallaxComponent from '@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent'
import BlogRightSection from '@/components/blog-page-components/BlogRightSection/BlogRightSection'
import CustomerReviewSection from '@/components/blog-page-components/CustomerReviewSection/CustomerReviewSection'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Link from 'next/link'
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
            <BlogParallaxComponent title={'Blog'} />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4  bg-[#111111] ">
                <div className="col-span-9 border-r-2 border-r-slate-900">
                    <div className={`nav-links-container transition ease-in-out delay-150 ${isFixed ? 'fixed top-20 z-10 ' : ''} bg-[#111111] w-full py-2 shadow-lg transition duration-1000 ease-in-out transform z-30`}>
                        <div className='text-white flex justify-center items-center flex-wrap gap-5 my-2'>
                            <Link href="#guide">
                                <div className='py-2 rounded-md cursor-pointer px-6 hover:bg-gray-200 hover:text-[#111111]'>
                                    Guides
                                </div></Link>
                            <Link href="#customer">
                                <div className='py-2 rounded-md cursor-pointer px-6 hover:bg-gray-200 hover:text-[#111111]'>
                                    Customer Reviews
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='max-h-[1000px] no-scrollbar overflow-y-scroll'>
                    <AlternateImageContainer  />
                    </div>
                    {/* <AlternateImageContainer />
                    <AlternateImageContainer /> */}
                </div>
                <div className="col-span-3 text-white">
                    <BlogRightSection />
                </div>
            </div>
            <div id="guide" className='bg-[#111111]'>
                <BlogGuideSection />
            </div>
            <div id="customer" className='bg-[#111111] pb-28'>
                <CustomerReviewSection />
            </div>
           <div className='bg-[#111111] '>
           <form class="max-w-5xl mx-auto px-10">
                <div class="mb-4">
                    <label class="block text-white font-bold mb-2" for="name">
                        Name
                    </label>
                    <input class=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your  name" />
                </div>
                <div class="mb-4">
                    <label class="block text-white font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                </div>
                <div class="mb-4">
                    <label class="block text-white font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea class=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message"></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-[#111111] hover:bg-white border hover:text-[#111111] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>
            </form>
           </div>

            <Footer />
        </>
    )
}

export default index