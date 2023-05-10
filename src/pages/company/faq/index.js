import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'

const sections = [
    {
        title: 'Section 1',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Section 2',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Section 3',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Section 4',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Section 5',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Section 6',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Section 7',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
]

const Index = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleSection = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <>
        <Navbar Navclass="bg-[#111111] text-white" />
            <div className='bg-black text-white py-5'>
                <div className='py-24'>
                    <h1 className='text-center text-2xl'>How Can I Help You ?</h1>
                </div>
                <div className='max-w-screen-xl mx-auto'>
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className='border rounded-md px-5 mt-2'
                            onClick={() => toggleSection(index)}
                        >
                            <div className='flex justify-between items-center py-4'>
                                <div>{section.title}</div>
                                <div>
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
