import React from 'react'
import bg from "../../../../public/assets/write_us_bg.jpg";
import FormContainer from '@/components/form-container/FormContainer';
const HomeWriteUsContainer = () => {
    return (
        <div className="w-full bg-[#111111]">
            <div className="bg-[#111111] flex justify-center items-center py-16 p-5 border-t-2 border-gray-900 rounded-sm">
            <div className="inset-0 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white">
                 What You Think About Us
                </h1>
              </div>
            </div>
          </div>
            {/* <div
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "auto",
                }}
            > */}
                <div className='container mx-auto py-10 px-5'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormContainer />
                        {/* <img data-aos="fade-left" data-aos-delay="500"   src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" /> */}
                        <div className="relative aspect-video overflow-hidden rounded-3xl">
                            <video className="w-full opacity-100" src='../assets/write_us_video.mp4' autoPlay muted loop></video>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default HomeWriteUsContainer