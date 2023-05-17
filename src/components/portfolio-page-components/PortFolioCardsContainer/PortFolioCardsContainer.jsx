import React from 'react'

const PortFolioCardsContainer = () => {
    return (
        <div className="mx-auto max-w-full p-5  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-10 gap-4">
                <div className=" py-4 ">
                    <img className="w-full h-48 object-cover mb-2" src="/assets/inner-space.jpg" alt="Card Image" />
                    <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">Visualization</h2>
                    <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className=" py-4 ">
                    <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                    <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                    <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className=" py-4 ">
                    <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                    <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                    <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className=" py-4 ">
                    <img className="w-full h-48 object-cover mb-2" src="https://source.unsplash.com/random/800x600" alt="Card Image" />
                    <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
                    <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default PortFolioCardsContainer