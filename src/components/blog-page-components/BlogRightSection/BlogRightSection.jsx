import React from 'react'

const BlogRightSection = () => {
    return (
        <div className='px-1 py-10'>
            <h1 className="text-3xl py-5">Popular News</h1>
            <div className='flex flex-col justify-between items-center text-white gap-4'>

                <a href="#" class="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                    <div class="flex flex-col justify-between px-2 leading-normal">
                        <h2 class="mb-2  font-bold tracking-tight ">Noteworthy technology</h2>
                        <p>Read More</p>
                    </div>
                </a>
                <a href="#" class="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                    <div class="flex flex-col justify-between px-2 leading-normal">
                        <h2 class="mb-2 font-bold tracking-tight ">Noteworthy technology</h2>
                        <p>Read More</p>
                    </div>
                </a>


            </div>
            <h1 className="text-3xl py-5">About</h1>
            <div className=' text-white gap-4 px-5'>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur magnam officiis rerum!</p>


            </div>
            <h1 className="text-3xl py-5">Popular News</h1>
            <div className='flex flex-col justify-between items-center text-white gap-4'>

                <a href="#" class="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                    <div class="flex flex-col justify-between px-2 leading-normal">
                        <h2 class="mb-2  font-bold tracking-tight ">Noteworthy technology</h2>
                        <p>Read More</p>
                    </div>
                </a>
                <a href="#" class="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                    <div class="flex flex-col justify-between px-2 leading-normal">
                        <h2 class="mb-2 font-bold tracking-tight ">Noteworthy technology</h2>
                        <p>Read More</p>
                    </div>
                </a>


            </div>
        </div>
    )
}

export default BlogRightSection