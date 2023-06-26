import { HeadTag } from '@/components/HeaadTag/HeadTag'
import ParallaxImageContainer from '@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer'
import AlternateImageContainer from '@/components/blog-page-components/AlternateImageContainer/AlternateImageContainer'
import BlogGuideSection from '@/components/blog-page-components/BlogGuidesSection/BlogGuideSection'
import BlogParallaxComponent from '@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent'
import BlogRightSection from '@/components/blog-page-components/BlogRightSection/BlogRightSection'
import CustomerReviewSection from '@/components/blog-page-components/CustomerReviewSection/CustomerReviewSection'
import Footer from '@/components/footer/Footer'
import FormContainer from '@/components/form-container/FormContainer'
import Navbar from '@/components/navbar/Navbar'
import { getMetatags } from '@/redux/action/metatags/creator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {
    const path = useRouter().pathname;
    const dispatch = useDispatch();

    useEffect(() => {
        if (window) {
            const host = window.location.host;
            const hostWithPath = `${host}${path}`;
            dispatch(getMetatags("SET_META_TAGS", hostWithPath));
        }
    }, [dispatch, path]);
    const [searchValue, setsearchValue] = useState('')
    const [filteredData, setfilteredData] = useState([])
    const blogData = useSelector((state) => state.allblogs.blog)
    useEffect(() => {
        if (searchValue) {
            const filterCareer = blogData.filter((item) => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
            setfilteredData(filterCareer)
        }
        else {
            setfilteredData(blogData)
        }
    }, [searchValue])

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
            <HeadTag />
            <Navbar />
            <BlogParallaxComponent title={'Blog'} />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4  bg-[#111111] ">
                <div className="xl:col-span-9 md:col-span-12 border-r-2 border-r-slate-900">
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
                    <h3 className="text-3xl font-bold pb-5 px-5 py-5 text-white">Search</h3>
                    <div className=' text-white gap-4 px-5 py-5'>
                        <input type="text" value={searchValue}
                            onChange={(e) => setsearchValue(e.target.value)} className=" border border-gray-300 text-white bg-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Blogs..." required />
                    </div>
                    <div className='max-h-[1000px] no-scrollbar overflow-y-scroll'>
                        {filteredData.length > 0 ? <AlternateImageContainer filteredData={filteredData} /> : (<h3 className='text-center text-white text-4xl px-2'>What You Search Is Not Here</h3>)}
                    </div>
                    {/* <AlternateImageContainer />
                    <AlternateImageContainer /> */}
                </div>
                <div className="xl:col-span-3 md:col-span-12 text-white">
                    <BlogRightSection />
                </div>
            </div>
            <div id="guide" className='bg-[#111111]'>
                <BlogGuideSection />
            </div>
            <div id="customer" className='bg-[#111111] pb-5 px-5'>
                <CustomerReviewSection />
            </div>
            <div className='bg-[#111111] '>
                <div className='max-w-7xl mx-auto px-5'>
                    <FormContainer />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default index