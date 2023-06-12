import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/HomeCarousel.module.css'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getMetatags } from '@/redux/action/metatags/creator'
import Head from 'next/head'
import { HeadTag } from '@/components/HeaadTag/HeadTag'

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

  // const path = useRouter().pathname;
  // const metaTags = useSelector(state => state.allMetatags.payload);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //  if(window)
  //  {
  //   const host = window.location.host
  //   const hostWithPath = `${host}${path}`
  //   dispatch(getMetatags('SET_META_TAGS', hostWithPath));
  //  }
  // }, [dispatch, path]);
  {/* <Head>
        {metaTags && (
          <meta dangerouslySetInnerHTML={{ __html: metaTags }} />
        )}
      </Head> */}
  return (
    <>
      <HeadTag />
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
                <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Virtual Production Services</h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p className="mb-4 text-justify">At Endlos Studio, we offer cutting-edge Virtual Production services that revolutionize how films, TV shows, and commercials are produced. Our team combines the power of advanced technology, creative expertise, and industry experience to bring your vision to life with unrivaled precision and efficiency.</p>
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
                  <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Real-Time Virtual Environments</h2>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                  <p className="mb-4 text-justify">Virtual Production is where the real and digital worlds come together. This is a way to combine live footage with computer graphics in real-time to provide feedback and interactivity on stage. This team-based process demands that all departments, including the Visual Effects Department, Production Designer, camera department, Producers, and the Director, be prepared beforehand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-screen-2xl mx-auto py-1'>
          <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                {/* <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2> */}
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Real-Time Virtual Environments </h3>
                <p className="mb-4 text-justify">We create highly realistic virtual environments seamlessly blending with live-action footage, providing a dynamic and immersive experience. Our team designs and constructs digital sets, landscapes, and locations, ensuring they align perfectly with your storytelling requirements.</p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Live Camera Tracking</h3>
                <p className="mb-4 text-justify">Our state-of-the-art camera tracking systems enable the real-time integration of virtual elements into live footage. This allows for precise camera movements, accurate perspective matching, and seamless interaction between actors and virtual objects, resulting in a more authentic and engaging visual experience.</p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Interactive Lighting and Effects </h3>
                <p className="mb-4 text-justify">Our Virtual Production services encompass dynamic lighting and effects that respond in real-time. From realistic shadows and reflections to dynamic environmental lighting, we ensure that the virtual and real elements coexist, creating a cohesive and visually stunning final product.</p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/Virtual_1.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
          {/* <div className='max-w-screen-2xl mx-auto'>
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
                    <p className="mb-4 text-justify">Our experienced team of virtual cinematographers leverages the power of Virtual Production to capture stunning shots in the virtual environment. Through virtual cameras and real-time rendering, we can explore unique camera angles, experiment with different lenses, and create captivating compositions that enhance the overall visual narrative.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/Virtual_2.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-end text-white h-full">
                {/* <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2> */}
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Virtual Cinematography</h3>
                <p className="mb-4 text-justify">Our experienced team of virtual cinematographers leverages the power of Virtual Production to capture stunning shots in the virtual environment. Through virtual cameras and real-time rendering, we can explore unique camera angles, experiment with different lenses, and create captivating compositions that enhance the overall visual narrative.</p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Real-Time Design Iteration</h3>
                <p className="mb-4 text-justify">Virtual Production offers the flexibility to make design changes on the fly. We can modify virtual sets, adjust lighting conditions, and explore alternative creative choices in real-time, reducing production time and costs associated with traditional post-production workflows.</p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Streamlined Collaboration</h3>
                <p className="mb-4 text-justify">With Virtual Production, collaboration becomes seamless. Our team works closely with directors, cinematographers, and production crews to ensure smooth communication and efficient execution of the creative vision. By enabling real-time visualization and interaction, we foster a collaborative environment where everyone can contribute their expertise and make informed decisions.</p>
                <p className="mb-4 text-justify">Virtual Production has become a game-changer in the entertainment industry, enabling filmmakers to streamline Production, enhance creative possibilities, and deliver visually stunning results. At Endlos Studio, we are committed to pushing the boundaries of Virtual Production to create captivating and immersive experiences that captivate audiences and elevate your storytelling to new heights.</p>
              </div>
            </div>

          </div>
          {/* <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p className="mb-4 text-justify">Virtual Production has become a game-changer in the entertainment industry, enabling filmmakers to streamline Production, enhance creative possibilities, and deliver visually stunning results. At Endlos Studio, we are committed to pushing the boundaries of Virtual Production to create captivating and immersive experiences that captivate audiences and elevate your storytelling to new heights. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Our Virtual Production Portfolio</h2>
                <p className="mb-4 text-justify">Virtual Production has revolutionized how films and other visual media are created, allowing filmmakers to seamlessly blend physical and digital elements to bring stories to life. Our portfolio in Virtual Production showcases our expertise in this cutting-edge field, highlighting the successful projects we have delivered. </p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/Virtual_3.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
          </div> */}
          <div className='max-w-screen-2xl mx-auto'>
            <p className='text-white font-semibold py-10 flex justify-center xl:justify-start '>HOW WE DO IT</p>
            <div className="max-w-screen-2xl mx-auto px-5">
              <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
                <div className="col-span-12 lg:col-span-4">
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Integrated Workflow</h2>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                    <p className="mb-4 text-justify">Virtual Production has revolutionized how films and other visual media are created, allowing filmmakers to seamlessly blend physical and digital elements to bring stories to life. Our portfolio in Virtual Production showcases our expertise in this cutting-edge field, highlighting the successful projects we have delivered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/Virtual_4.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-end text-white h-full">
                {/* <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2> */}
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Integrated Workflow</h2>
                <p className="mb-4 text-justify">We excel at creating an integrated workflow that combines live-action footage with real-time rendering and virtual environments. Our portfolio demonstrates how we seamlessly merge physical sets with digital assets, enabling directors and cinematographers to visualize and capture scenes in real-time.</p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Realistic Virtual Sets</h2>
                <p className="mb-4 text-justify">Explore our portfolio to witness our ability to create highly realistic virtual sets. From intricate interior spaces to expansive outdoor landscapes, we meticulously design and render virtual environments that capture the desired atmosphere and complement the story's narrative.</p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Dynamic Lighting and Visual Effects </h2>
                <p className="mb-4 text-justify">Our expertise in virtual Production extends to dynamic lighting and visual effects. We showcase how we skillfully manipulate lighting conditions and integrate realistic visual effects, enhancing the overall visual quality of the Production and immersing viewers in captivating worlds.</p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                {/* <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2> */}
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Streamlined Previsualization</h3>
                <p className="mb-4 text-justify">Our portfolio highlights the importance of previsualization in virtual Production. We demonstrate how we collaborate with directors and production teams to create detailed previsualization assets that aid in planning shots, camera movements, and overall scene composition.</p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Real-Time Iteration</h2>
                <p className="mb-4 text-justify">Witness the power of real-time iteration in our virtual production projects. Our portfolio showcases our ability to make instant adjustments, providing directors and cinematographers with immediate feedback and the freedom to experiment with different creative choices.</p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Cost and Time Efficiency</h2>
                <p className="mb-4 text-justify">Our virtual production work strategy emphasizes cost and time efficiency. Our portfolio demonstrates how virtual production techniques help streamline the production process, reducing the need for extensive post-production and saving valuable resources.</p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/Virtual_3.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5 py-5">
          <div className='h-auto flex flex-col xl:flex-row md:flex-row gap-5 justify-between items-center'>
            <div className='flex flex-col justify-center gap-5'>
            <h2 className="text-2xl max-w-screen-sm font-bold mb-4 text-white">Collaboration and Expertise</h2>
              <p className='text-white  text-md text-justify max-w-screen-md leading-10'>We pride ourselves on our collaborative approach and ability to work closely with directors, cinematographers, and production teams. Our portfolio highlights successful collaborations, showcasing the seamless integration of our expertise with the vision and requirements of our clients.</p>
              <p className='text-white  text-md text-justify max-w-screen-md leading-10'>Experience the future of filmmaking through our Virtual Production portfolio. Each project exemplifies our commitment to innovation, creativity, and delivering exceptional results that exceed expectations.</p>
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