import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import bg from "../../../../public/assets/img1.jpg";

const CareerDetails = () => {
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
              <h1 className="text-5xl font-bold text-white">Career</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#111111] text-white'>
        <div className='grid grid-cols-12 px-5'>
          <div className='col-span-12 sm:col-span-8'>
            <div className='max-w-screen-md mx-auto py-10'>
              <div className='py-5'>
                <h1 className='font-bold text-xl'>Abouts Us</h1>
                <p className='py-4'>Chennai | Mumbai | Hyderabad</p>
                <p>Open, inclusive, and equal are three words that sum up the work culture at PhantomFX. Our strength lies in our people; a dedicated team of creative professionals who work together to bring alive magic on screen. Our teams have delivered on some of the craziest deadlines, without taking eyes off the high bar of quality.</p>
              </div>
              <div className='py-5'>
                <h1 className='font-bold text-xl py-4'>Job Description</h1>
                <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-className creature animation quality.
                </p>
              </div>
              <div className='py-5'>
                <h1 className='font-bold text-md py-4'>Job Description</h1>
                <p>Phantom Fx is looking for a Mid-Senior Creature Animator with extensive experience animating animal movement and behaviour. As a  Creature Animator, you will be part of a diverse team of animators that collaborates closely with Visual Design and Code to create engaging creatures for our current projects. As a Creature Animator for this dedicated creature team, we will look to you to deliver world-className creature animation quality.
                </p>
              </div>
              <div className='py-5'>
                <p className='py-4'>Job Description</p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
              </div>
              <div className='py-5'>
                <h1 className='font-bold text-xl py-4'>Requirements</h1>
                <p className='py-4'>We would love to hear from if:</p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
              </div>
              <div className='py-5'>
                <h1 className='font-bold text-xl py-4'>Benefits</h1>
                <p className='py-4'>We would love to hear from if:</p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
                <p className='px-5 py-1'>Create animalistic and grounded hand keyed animations that have a very strong foundation in realism;
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-4 py-10'>
            <div className='py-5'>
              <h1 className='font-bold text-xl py-4'>Job Information</h1>
              <p>Location</p>
              <p className='font-semibold'>Ahemdabad</p>
            </div>
            <button className="mt-4 bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
                  Apply Now
                </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CareerDetails