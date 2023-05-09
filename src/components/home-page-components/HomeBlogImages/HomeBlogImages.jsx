import React from 'react'

const HomeBlogImages = () => {
    return (

        <div className='grid py-10 bg-[#111111]'>
            <div className='grid grid-cols-1'>
                <div class="relative">
                    <div class="card">
                        <img src="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg" class="w-full h-auto" alt="example image" />
                        <div class="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            <span class="text-xl font-bold">Hover text on image</span>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div class="relative">
                        <div class="card">
                            <img src="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg" class="w-full h-auto" alt="example image" />
                            <div class="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span class="text-xl font-bold">Hover text on image</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="card">
                            <img src="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg" class="w-full h-auto" alt="example image" />
                            <div class="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <span class="text-xl font-bold">Hover text on image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomeBlogImages