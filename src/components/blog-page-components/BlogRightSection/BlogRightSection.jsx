import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'

const BlogRightSection = () => {
    const news = useSelector((state)=>state.allnews.news)
    return (
        <div className='px-1 py-5 w-full'>
            <div className="flex flex-col xl:items-start px-5 py-10">
                <h3 className="text-2xl font-bold py-5">Popular News</h3>
                {news && news.map((item,index)=>(
                    <div className='flex flex-col justify-between items-center text-white gap-4'>

                    <div className="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 py-5">
                        <img className="object-cover w-full h-100 md:h-auto xl:w-36" src={item.src} alt="img_3" />
                        <div className="flex flex-col justify-between px-2 leading-normal">
                            <h3 className="mb-2  font-bold tracking-tight ">{item.name}</h3>
                            <Link href={`/news/${item.id}`}><span className='cursor-pointer py-1 border rounded-md border-gray-700 hover:bg-white hover:text-black px-2 bg-gray-950'>Read More</span></Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

    )
}

export default BlogRightSection