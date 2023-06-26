import React from 'react'

const PortFolioCardsContainer = () => {
    return (
        <div className="mx-auto max-w-full p-5  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-10 gap-4">
                <div className=" py-4  " >
                    <img className="w-full h-48 object-cover mb-2" src="/assets/inner-space.jpg" alt="Card Image" />
                    <h3 className="text-xl font-semibold mb-2 text-[#b6b6b6]">Visualization</h3>
                </div>
                <div className=" py-4 ">
                    <img className="w-full h-48 object-cover mb-2" src="/assets/LED_live_action.jpg" alt="Card Image" />
                    <h3 className="text-xl font-semibold mb-2 text-[#b6b6b6]">LED Live Action</h3>
                </div>
                <div className=" py-4 ">
                    <img className="w-full h-48 object-cover mb-2" src="/assets/Motion_Capture.jpg" alt="Card Image" />
                    <h3 className="text-xl font-semibold mb-2 text-[#b6b6b6]">Motion Capture</h3>
                </div>
                <div className=" py-4 ">
                    <img className="w-full h-48 object-cover mb-2" src="/assets/Hybrid_camera.jpg" alt="Card Image" />
                    <h3 className="text-xl font-semibold mb-2 text-[#b6b6b6]">Hybrid Camera</h3>
                </div>
            </div>
        </div>
    )
}

export default PortFolioCardsContainer