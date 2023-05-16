import React from 'react'
import bg from "../../../../public/assets/home-7-img-9.jpg";
import FormContainer from '@/components/form-container/FormContainer';
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormContainer/>
                        <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWriteUsContainer