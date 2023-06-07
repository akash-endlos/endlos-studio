import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from '../../../styles/HomeCarousel.module.css'
import Link from 'next/link'
const index = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#111111] text-white'>
        <div className="relative">
          <video src='/assets/Endlos_Furniture.mp4' autoPlay loop muted className={`${styles.videocontainer}  `} />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center gap-4 justify-center px-5 bg-opacity-60 bg-black ">
            <p className="text-white xl:text-5xl md:text-xl max-w-screen-md px-5 font-extrabold">Virtual Production</p>



          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Your Vision Our Studio Network</h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p className="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-[#111111] '>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-2xl mx-auto py-10">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_1.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_2.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_5.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_6.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_7.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_1.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_3.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_5.jpg" alt="" />
            </div>
          </div>
        </div>




        <div className='max-w-screen-2xl mx-auto'>
          <p className='text-white font-semibold py-10 flex justify-center xl:justify-start '>HOW WE DO IT</p>
          <div className="max-w-screen-2xl mx-auto px-5">
          <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Your Vision Our Studio Network</h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p className="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='max-w-screen-2xl mx-auto py-1'>
          <div className="grid grid-cols-12 gap-10 py-10">
            <div className="col-span-6">
              <div className="flex flex-col justify-start text-white h-full">
                <h2 className="text-6xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>
            <div className="col-span-6">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" className="w-full h-[500px] rounded-2xl" />
            </div>
          </div>
          <div className='max-w-screen-2xl mx-auto'>
          <p className='text-white font-semibold py-10 flex justify-center xl:justify-start '>HOW WE DO IT</p>
          <div className="max-w-screen-2xl mx-auto px-5">
          <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Your Vision Our Studio Network</h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p className="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
          <div className="grid grid-cols-12 gap-10 py-10">
            <div className="col-span-6">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" className="w-full h-[500px] rounded-2xl" />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-end text-white h-full">
                <h2 className="text-6xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-12 gap-10 py-10">
            <div className="col-span-6">
              <div className="flex flex-col justify-start text-white h-full">
                <h2 className="text-6xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>
            <div className="col-span-6">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" className="w-full h-[500px] rounded-2xl" />
            </div>
          </div>
          <div className='max-w-screen-2xl mx-auto'>
          <p className='text-white font-semibold py-10 flex justify-center xl:justify-start '>HOW WE DO IT</p>
          <div className="max-w-screen-2xl mx-auto px-5">
          <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Your Vision Our Studio Network</h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p className="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
          <div className="grid grid-cols-12 gap-10 py-10">
            <div className="col-span-6">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" className="w-full h-[500px] rounded-2xl" />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-end text-white h-full">
                <h2 className="text-6xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>

          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Connect with Us and Unlock a World of Creativity!</h2>
              </div>
              <Link href='/contact-us/write-to-us'>
              <button className='rounded-lg bg-black text-white py-3 px-4 font-semibold hover:bg-white hover:text-black'>Connect With Us</button>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p className="mb-4 text-justify">Get ready to collaborate with passionate individuals who are dedicated to pushing the boundaries of creativity. Our community is a hub for artistic synergy and collective growth. Together, we can achieve greatness!</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default index