import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect } from 'react'
import styles from '../../../../styles/HomeCarousel.module.css'
import Link from 'next/link'
import { HeadTag } from '@/components/HeaadTag/HeadTag'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getMetatags } from '@/redux/action/metatags/creator'

const index = () => {
  const path = useRouter().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (window) {
      const host = window.location.host;
      const hostWithPath = `${host}${path}`;
      dispatch(getMetatags("SET_META_TAGS", hostWithPath));
    }
  }, [dispatch, path]);
  return (
    <>
      <HeadTag />
      <Navbar />
      <div className='bg-[#111111] text-white'>
        <div className="relative">
          <video src='/assets/Endlos_Furniture.mp4' autoPlay loop muted className={`${styles.videocontainer}  `} />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center gap-4 justify-center px-5 bg-opacity-60 bg-black ">
            <p className="text-white xl:text-5xl md:text-xl max-w-screen-md px-5 font-extrabold">AR & VR</p>



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
      <div className='bg-[#111111] px-5'>
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
          <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/gd-3.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
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
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/gd-3.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-end text-white h-full">
                <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/gd-3.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
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
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/gd-3.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-end text-white h-full">
                <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>

          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5 py-5">
          <div className='h-auto flex flex-col xl:flex-row md:flex-row gap-5 justify-between items-center'>
            <div className='flex flex-col justify-center gap-5'>
              <p className='text-white font-bold xl:text-2xl text-md text-justify max-w-screen-md leading-10'>Get ready to collaborate with passionate individuals who are dedicated to pushing the boundaries of creativity. Our community is a hub for artistic synergy and collective growth. Together, we can achieve greatness!</p>
              <Link href='/contact-us/write-to-us'>
                <button className='rounded-lg bg-black text-white py-3 px-3 font-semibold hover:bg-white hover:text-black'>Connect With Us</button>
              </Link>
            </div>
            <div>
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" className="w-[250px] h-[250px] rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default index