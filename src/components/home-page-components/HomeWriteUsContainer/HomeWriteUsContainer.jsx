import React from 'react'
import bg from "../../../../public/assets/write_us_bg.jpg";
import FormContainer from '@/components/form-container/FormContainer';
const HomeWriteUsContainer = () => {
    return (
        <div className="w-full bg-[#111111]">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormContainer />
                        {/* <img data-aos="fade-left" data-aos-delay="500"   src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" /> */}
                        <div class="relative aspect-video overflow-hidden rounded-3xl">
                            <video class="w-full" src='../assets/write_us_video.mp4' autoPlay muted></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWriteUsContainer