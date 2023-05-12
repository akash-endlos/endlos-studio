import React from 'react'

const HomeBlogImages = () => {
    return (

        <div className='grid py-10 bg-[#111111]'>
            <div className='grid grid-cols-1'>
                <div className="relative">
                    <div className="card">
                        <img src="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg" className="w-full h-auto" alt="example image" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            <span className="text-xl font-bold">Hover text on image</span>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className="relative">
                        <div className="card">
                            <img src="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg" className="w-full h-auto" alt="example image" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span className="text-xl font-bold">Hover text on image</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="card">
                            <img src="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg" className="w-full h-auto" alt="example image" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span className="text-xl font-bold">Hover text on image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomeBlogImages