import { faqData } from '@/allcontent/faqData'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'



const Index = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [iconRotation, setIconRotation] = useState(0)

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    setIconRotation((prevRotation) => prevRotation + 180)
  }

  return (
    <>
      <Navbar Navclass="bg-[#111111] text-white" />
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
