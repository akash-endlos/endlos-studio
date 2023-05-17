import React from 'react'
import bg from "../../../../public/assets/our_team_background.jpg";

const HomeOurTeam = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "auto",
            }}
            className="bg-fixed bg-center bg-cover "
        >
            <div className="mx-auto max-w-screen-2xl py-5  " data-aos="zoom-in" data-aos-easing="ease-in"  data-aos-duration="500">
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