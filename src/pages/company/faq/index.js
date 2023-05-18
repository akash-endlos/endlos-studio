import { faqData } from '@/allcontent/faqData'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import bg from "../../../../public/assets/img1.jpg";


const Index = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [iconRotation, setIconRotation] = useState(0)

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    setIconRotation((prevRotation) => prevRotation + 180)
  }

  return (
    <>
      <Navbar />
      <div className="relative">
                <div className="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "500px",
                }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">FAQ</h1>
                        </div>
                    </div>
                </div>
            </div>
      <div className='bg-[#111111] text-white py-5'>
        <div className='pt-24 pb-10'>
          <h1 className='text-center text-2xl'>How Can I Help You ?</h1>
        </div>
        <div className='max-w-screen-xl mx-auto'>
          {faqData.map((section, index) => (
            <div
              key={index}
              className='border rounded-md px-5 mt-2'
              onClick={() => toggleSection(index)}
            >
              <div className='flex justify-between items-center py-4'>
                <div>{section.title}</div>
                <div style={{ transform: `rotate(${activeIndex === index ? iconRotation : 0}deg)` }}>
                  <AiOutlineCaretDown />
                </div>
              </div>
              <p className={`py-5 ${activeIndex === index ? '' : 'hidden'}`}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Index
