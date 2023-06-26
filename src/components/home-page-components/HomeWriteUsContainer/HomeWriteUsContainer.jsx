import React from 'react'
import bg from "../../../../public/assets/write_us_bg.jpg";
import FormContainer from '@/components/form-container/FormContainer';
const HomeWriteUsContainer = () => {
    return (
        <div className="w-full bg-[#111111]">
            <div className="bg-[#111111] flex justify-center items-center py-16 p-5 border-t-2 border-gray-900 rounded-sm">
            <div className="inset-0 flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white">
                 What do you think about us
                </h3>
              </div>
            </div>
          </div>
                <div className='max-w-screen-2xl mx-auto py-10 px-5'>
                    <div className="grid xl:grid-rows-1 lg:grid-cols-2 gap-4">
                        <FormContainer />
                        <img src='/assets/endlos_company.jpg' className='rounded-lg w-full h-auto' alt='endlos studio image'/>
                    </div>
                </div>
        </div>
    )
}

export default HomeWriteUsContainer