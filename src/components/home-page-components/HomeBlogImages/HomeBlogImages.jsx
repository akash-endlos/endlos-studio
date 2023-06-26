import Link from 'next/link'
import React from 'react'

const HomeBlogImages = () => {
    return (

        <div className='grid pt-10 bg-[#111111]'>
            <div className="bg-[#111111] flex justify-center items-center pb-16  border-gray-900">
            <div className="inset-0 flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white">
                 Blog
                </h3>
              </div>
            </div>
          </div>
            <div className='grid grid-cols-1'>
               <Link href='/blog/Artificial Intelligence in Gaming'>
               <div className="relative">
                    <div className="card cursor-pointer">
                    <img src="/assets/home_vr_1.jpg" className="w-full h-auto " alt="endlos studio  unreal engine" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-end justify-start opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            <span className="xl:text-4xl md:text-sm font-bold absolute xl:bottom-16 sm:bottom:0 left-10">Artificial Intelligence in Gaming: Enhancing Immersion and Gameplay.</span>
                        </div>
                    </div>
                </div>
               </Link>

                <div className='grid grid-cols-2'>
                   <Link href='/blog/The Impact of Virtual Reality'>
                   <div className="relative">
                        <div className="card cursor-pointer">
                            <img src="/assets/home_vr_2.jpg" className="w-full h-auto" alt="endlos studio architectural visualization" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span className="xl:text-4xl md:text-sm font-bold absolute xl:bottom-16 sm:bottom:0 sm:leading-4 left-10">The Impact of Virtual Reality on Architecture and Design</span>
                            </div>
                        </div>
                    </div>
                   </Link>
                    <div className="relative">
                        <Link href='/blog/The Unreal Engine 5.2 is available'>
                        <div className="card cursor-pointer">
                            <img src="/assets/home_vr_3.jpg" className="w-full h-auto" alt="endlos studio game development" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span className="xl:text-4xl md:text-sm  font-bold absolute xl:bottom-16 sm:bottom:0 left-10">The Unreal Engine 5.2 is available!</span>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomeBlogImages