import React from 'react'

const BlogRightSection = () => {
    return (
        <div className='px-1 py-5 w-full'>
            <div className="flex flex-col xl:items-start px-5 py-10">
                <h1 className="text-2xl font-bold py-5">Popular News</h1>
                <div className='flex flex-col justify-between items-center text-white gap-4'>

                    <a className="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                        <div className="flex flex-col justify-between px-2 leading-normal">
                            <h2 className="mb-2  font-bold tracking-tight ">Noteworthy technology</h2>
                            <p>Read More</p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                        <div className="flex flex-col justify-between px-2 leading-normal">
                            <h2 className="mb-2 font-bold tracking-tight ">Noteworthy technology</h2>
                            <p>Read More</p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                        <div className="flex flex-col justify-between px-2 leading-normal">
                            <h2 className="mb-2 font-bold tracking-tight ">Noteworthy technology</h2>
                            <p>Read More</p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                        <div className="flex flex-col justify-between px-2 leading-normal">
                            <h2 className="mb-2 font-bold tracking-tight ">Noteworthy technology</h2>
                            <p>Read More</p>
                        </div>
                    </a>


                </div>
            </div>
            <div className='flex flex-col xl:items-start px-5 '>
                <h1 className="text-2xl font-bold py-5">Categories</h1>
                <div className=' text-white gap-4  pt-5'>
                    <ul>
                        <li className='text-bold text-xl font-serif'>Award</li>
                        <li className='text-bold text-xl font-serif'>Camera</li>
                        <li className='text-bold text-xl font-serif'>Festival</li>
                        <li className='text-bold text-xl font-serif'>Video</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default BlogRightSection