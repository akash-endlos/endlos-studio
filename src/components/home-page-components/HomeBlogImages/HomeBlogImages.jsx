import React from 'react'

const HomeBlogImages = () => {
    return (

        <div className='grid pt-10 bg-[#111111]'>
            <div className='grid grid-cols-1'>
                <div className="relative">
                    <div className="card cursor-pointer">
                        <img src="/assets/home_blog_1.jpg" className="w-full h-[700px]" alt="example image" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-end justify-start opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            <span className="text-4xl font-bold absolute bottom-16 left-10">Make Our World Besutiful With Virtual Reality</span>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className="relative">
                        <div className="card cursor-pointer">
                            <img src="/assets/home_blog_2.jpg" className="w-full h-[400px]" alt="example image" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span className="text-4xl font-bold absolute bottom-16 left-10">Make Our World Besutiful With Virtual Reality</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="card cursor-pointer">
                            <img src="/assets/home_blog_3.jpg" className="w-full h-[400px]" alt="example image" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span className="text-4xl font-bold absolute bottom-16 left-10">Make Our World Besutiful With Virtual Reality</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomeBlogImages