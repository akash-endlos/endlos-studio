import React from 'react'


const HomeOurTeam = () => {
    return (
        <div
            style={{
                backgroundImage: `url(https://cdn.pixabay.com/photo/2022/08/10/19/39/space-7378056__340.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "auto",
            }}
            class="bg-fixed bg-center bg-cover "
        >
            <div className="mx-auto max-w-screen-xl py-5  ">
                <p className='text-center font-bold text-4xl text-white py-10'>OUR TEAM</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10">
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                        <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn text-[#b6b6b6]">Read More</button>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                        <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn text-[#b6b6b6]">Read More</button>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                        <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn text-[#b6b6b6]">Read More</button>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                        <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn text-[#b6b6b6]">Read More</button>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                        <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn text-[#b6b6b6]">Read More</button>
                    </div>
                    <div className=" p-4 ">
                        <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                        <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                        <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn text-[#b6b6b6]">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOurTeam