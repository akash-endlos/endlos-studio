import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className='bg-black text-white py-5'>
        <div className='pt-24 pb-10'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Blog post</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline transition duration-300">The benefits of using Tailwind CSS</a>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Blog post</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline transition duration-300">The benefits of using Tailwind CSS</a>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Blog post</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline transition duration-300">The benefits of using Tailwind CSS</a>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Blog post</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline transition duration-300">The benefits of using Tailwind CSS</a>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Careers