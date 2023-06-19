import React from 'react'

const CreativeTeam = () => {
    return (
        <div className='bg-[#111111]'>
            <div className="mx-auto max-w-screen-2xl py-5  ">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="grid gap-2 lg:gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 rounded-lg h-[300px] w-[300px]" src="/assets/yash.jpg" alt="endlos ceo yash patel" />
                            <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <p className='text-white cursor-pointer'>Yash Patel</p>
                            </h3>
                            <p className='cursor-pointer'>CEO of  Endlos group</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 rounded-lg h-[300px] w-[300px]" src="/assets/khilan.jpg" alt="endlos founder khilan patel" />
                            <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <p className='text-white cursor-pointer'>Khilan Patel</p>
                            </h3>
                            <p className='cursor-pointer'>Founder of  Endlos group</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 rounded-lg h-[300px] w-[300px]" src="/assets/saurabh_malpure.png" alt="endlos cto saurabh malpure" />
                            <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <p className='text-white cursor-pointer'>Saurabh Malpure</p>
                            </h3>
                            <p className='cursor-pointer'>CTO of  Endlos group</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 rounded-lg h-[300px] w-[300px]" src="/assets/rohit.jpg" alt="endlos rohit nair" />
                            <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <p className='text-white cursor-pointer'>Rohit Nair</p>
                            </h3>
                            <p className='cursor-pointer'>Unreal Engine Lead</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 rounded-lg h-[300px] w-[300px]" src="/assets/nikesh.jpg" alt="endlos nikesh more" />
                            <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <p className='text-white cursor-pointer'>Nikesh More</p>
                            </h3>
                            <p className='cursor-pointer'>Unreal Engine Artist</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 rounded-lg h-[300px] w-[300px]" src="/assets/pavan.jpg" alt="endlos pavan borse" />
                            <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <p className='text-white cursor-pointer'>Pavan Borse</p>
                            </h3>
                            <p className='cursor-pointer'>Unreal Engine Artist</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 rounded-lg h-[300px] w-[300px]" src="/assets/saurabh.jpg" alt="endlos saurabh patel" />
                            <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <p className='text-white cursor-pointer'>Saurabh Patel</p>
                            </h3>
                            <p className='cursor-pointer'>Unreal Engine Developer</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 rounded-lg h-[300px] w-[300px] object-cover" src="/assets/payal.jpg" alt="endlos payal patel" />
                            <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <p className='text-white cursor-pointer'>Payal Jadav</p>
                            </h3>
                            <p className='cursor-pointer'>Human Resource Executive</p>
                        </div>

                    </div>
                </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10 text-center">
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="/assets/humanicon-01.png" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">YASH PATEL</h2>
                        <p className="text-[#b6b6b6]"> CEO of Endlos group</p>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="/assets/humanicon-01.png" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">KHILAN PATEL</h2>
                        <p className="text-[#b6b6b6]"> Founder of  Endlos group</p>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="/assets/humanicon-01.png" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">ROHIT NAIR</h2>
                        <p className="text-[#b6b6b6]"> Unreal Engine Lead</p>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="/assets/humanicon-01.png" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">NIKESH MORE</h2>
                        <p className="text-[#b6b6b6]">Unreal Engine Artist</p>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="/assets/humanicon-01.png" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">PAVAN BORSE</h2>
                        <p className="text-[#b6b6b6]">Unreal Engine Artist</p>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="/assets/humanicon-01.png" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">SAURABH PATEL</h2>
                        <p className="text-[#b6b6b6]">Unreal Engine Developer</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CreativeTeam