import React from 'react'

const CreativeTeam = () => {
    return (
        <div className='bg-[#111111]'>
            <div className="mx-auto max-w-screen-xl py-5  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10 text-center">
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="/assets/humanicon-01.png" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">YASH PATEL</h2>
                        <p className="text-[#b6b6b6]"> CEO and director of Endlos group</p>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="/assets/humanicon-01.png" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">KHILAN PATEL</h2>
                        <p className="text-[#b6b6b6]"> Founder and director of  Endlos group</p>
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
                </div>
            </div>
        </div>
    )
}

export default CreativeTeam