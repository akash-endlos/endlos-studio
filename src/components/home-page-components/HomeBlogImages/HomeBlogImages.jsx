import Link from 'next/link'
import React from 'react'

const HomeBlogImages = () => {
    return (

        <div className='grid pt-10 bg-[#111111]'>
            <div className='grid grid-cols-1'>
               <Link href='/blog/1'>
               <div className="relative">
                    <div className="card cursor-pointer">
                        <img src="/assets/home_vr_1.jpg" className="w-full h-[700px]" alt="example image" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-end justify-start opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            <span className="text-4xl font-bold absolute bottom-16 left-10">Make Our World Beautiful With Virtual Reality</span>
                        </div>
                    </div>
                </div>
               </Link>

                <div className='grid grid-cols-2'>
                   <Link href='/blog/2'>
                   <div className="relative">
                        <div className="card cursor-pointer">
                            <img src="/assets/home_vr_2.jpg" className="w-full h-[400px]" alt="example image" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span className="text-4xl font-bold absolute bottom-16 left-10">The Impact of Virtual Reality on Architecture and Design</span>
                            </div>
                        </div>
                    </div>
                   </Link>
                    <div className="relative">
                        <Link href='/blog/3'>
                        <div className="card cursor-pointer">
                            <img src="/assets/home_vr_3.jpg" className="w-full h-[400px]" alt="example image" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span className="text-4xl font-bold absolute bottom-16 left-10">The Unreal Engine 5.2 is available!</span>
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