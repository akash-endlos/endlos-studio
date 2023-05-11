import React from 'react'
import bg from "../../../../public/assets/home-7-img-9.jpg";
const HomeWriteUsContainer = () => {
    return (
        <div className="w-full bg-[#111111] pt-10">
            <div
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "auto",
                }}
            >
                <div className='container mx-auto py-10 px-5'>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <form class="w-full">
                            <div className='text-white pb-10'><span className="font-bold tracking-[.2em] cursor-pointer text-2xl align-middle ">Write Us</span></div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="please enter full name" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                                        Email
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="please enter email" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-3/4 px-3 mb-6 md:mb-0">

                                    <label for="message" class="block mb-2 text-sm font-medium text-white">YOUR MESSAGE</label>
                                    <textarea id="message" rows="4" class=" outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                                </div>
                            </div>
                            <div>
                                <button class="bg-white text-black hover:text-white hover:bg-black py-2 px-4 rounded">Submit</button>

                            </div>
                        </form>
                        <img src="https://images.all-free-download.com/images/graphiclarge/canyon_desert_forest_hill_landscape_mountain_nature_600620.jpg" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWriteUsContainer