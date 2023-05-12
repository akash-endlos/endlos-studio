import React from 'react'

const BlogRightSection = () => {
    return (
        <div className='px-1 py-5 w-full'>
            <h1 className="text-3xl font-bold pb-5">Search</h1>
            <div className=' text-white gap-4 px-5'>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
            </div>
            <div class="flex flex-col xl:items-start items-center py-10">
                <h1 className="text-3xl font-bold">About</h1>
                <div className=' text-white gap-4 px-5 pt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur magnam officiis rerum!</p>
                </div>
                <h1 className="text-3xl font-bold py-5">Popular News</h1>
                <div className='flex flex-col justify-between items-center text-white gap-4'>

                    <a class="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                        <div class="flex flex-col justify-between px-2 leading-normal">
                            <h2 class="mb-2  font-bold tracking-tight ">Noteworthy technology</h2>
                            <p>Read More</p>
                        </div>
                    </a>
                    <a class="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                        <div class="flex flex-col justify-between px-2 leading-normal">
                            <h2 class="mb-2 font-bold tracking-tight ">Noteworthy technology</h2>
                            <p>Read More</p>
                        </div>
                    </a>
                    <a class="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                        <div class="flex flex-col justify-between px-2 leading-normal">
                            <h2 class="mb-2 font-bold tracking-tight ">Noteworthy technology</h2>
                            <p>Read More</p>
                        </div>
                    </a>
                    <a class="flex flex-col items-center  shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full h-100 md:h-auto xl:w-36" src="/assets/home-7-img-1.jpg" alt="" />
                        <div class="flex flex-col justify-between px-2 leading-normal">
                            <h2 class="mb-2 font-bold tracking-tight ">Noteworthy technology</h2>
                            <p>Read More</p>
                        </div>
                    </a>


                </div>
            </div>
            <div className='flex flex-col xl:items-start items-center'>
                <h1 className="text-3xl font-bold py-5">Categories</h1>
                <div className=' text-white gap-4 px-5 pt-5'>
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