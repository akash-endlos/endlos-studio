import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect } from 'react'
import styles from '../../../../styles/HomeCarousel.module.css'
import Link from 'next/link'
import { HeadTag } from '@/components/HeaadTag/HeadTag'
import { getMetatags } from '@/redux/action/metatags/creator'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

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
    <HeadTag/>
      <Navbar />
      <div className='bg-[#111111] text-white'>
        <div className="relative">
          <video src='/assets/Endlos_Furniture.mp4' autoPlay loop muted className={`${styles.videocontainer}  `} />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center gap-4 justify-center px-5 bg-opacity-60 bg-black ">
            <h1 className="text-white xl:text-5xl md:text-xl max-w-screen-md px-5 font-extrabold">Walktrough</h1>



          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Why Choose Endlos Studio</h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p className="mb-4 text-justify">Engage and captivate our audience with interactive experiences that push the boundaries of technology and creativity. Our interactive walkthrough services cover various applications, including virtual reality (VR) and augmented reality (AR) experiences, custom installations for events and exhibitions, and multi-platform development for web and mobile. With our expertise in the user interface (UI) and user experience (UX) design, we create intuitive and enjoyable interactive experiences that leave a lasting impression.</p>
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
                  <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Walkthrough Services</h2>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                  <p className="mb-4 text-justify">At Endlos Studio, we offer walkthrough services in architectural visualization that allow you to experience and explore architectural spaces in a virtual environment. Our walkthroughs comprehensively understand your designs, helping you showcase and communicate your architectural vision with precision and impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-screen-2xl mx-auto py-1'>
          <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Virtual Exploration</h2>
                <p className="mb-4 text-justify">Our walkthroughs enable you to navigate architectural spaces virtually, providing a realistic and immersive experience. With advanced 3D rendering techniques, we create detailed environments that accurately represent your designs, allowing clients and stakeholders to engage and interact with the spaces. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Attention to Detail</h2>
                <p className="mb-4 text-justify">We pay meticulous attention to detail, ensuring that every aspect of your architectural design is faithfully represented in the walkthrough. From textures and materials to lighting and spatial relationships, we strive for accuracy and realism, creating an authentic representation of the space.</p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Interactive Elements</h2>
                <p className="mb-4 text-justify">Our walkthroughs can incorporate interactive elements, such as clickable hotspots, informative pop-ups, and annotations, to provide additional information about specific areas or features of the design. This interactivity enhances engagement and facilitates a deeper understanding of the space.</p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/Walktrough_1.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/Walktrough_2.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-end text-white h-full">
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Realistic Lighting and Atmosphere</h2>
                <p className="mb-4 text-justify">We create realistic lighting scenarios that replicate natural daylight or artificial lighting sources, enhancing the visual appeal of the walkthrough. The interplay of light and shadow and the manipulation of atmosphere and mood add depth and realism to the virtual space. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Customization and Flexibility</h2>
                <p className="mb-4 text-justify">We understand that every architectural project is unique, and we tailor our walkthroughs to meet your specific requirements. Whether showcasing different design options, highlighting specific architectural features, or incorporating branding elements, we offer customization and flexibility to ensure that the walkthrough aligns perfectly with your vision. </p>
                <p className="mb-4 text-justify">Our walkthrough services in architectural visualization provide a powerful tool for architects, interior designers, and real estate developers to effectively communicate their designs to clients, investors, and the general public. With attention to detail, realism, and interactive features, we bring your architectural vision to life and create a compelling visual experience.</p>
              </div>
            </div>

          </div>
          <div className='max-w-screen-2xl mx-auto'>
            <p className='text-white font-semibold py-10 flex justify-center xl:justify-start '>HOW WE DO IT</p>
            <div className="max-w-screen-2xl mx-auto px-5">
              <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
                <div className="col-span-12 lg:col-span-4">
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Architectural Visualization (Walkthrough)</h2>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                    <p className="mb-4 text-justify">Architectural visualization walkthroughs are powerful tools used to showcase and communicate architectural designs in a dynamic and immersive way. Through advanced 3D rendering techniques and animation, walkthroughs provide a virtual tour of a building or space, allowing viewers to experience and explore the design from various angles and perspectives.</p>
                    <p className="mb-4 text-justify">Our studio specializes in creating high-quality architectural visualization walkthroughs that bring architectural designs to life. Our portfolio demonstrates our expertise in this field, highlighting the projects we have successfully delivered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/Walktrough_4.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-end text-white h-full">
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Realistic Visualization</h2>
                <p className="mb-4 text-justify">We use state-of-the-art rendering techniques to create realistic and visually stunning walkthroughs. Our attention to detail in texturing, lighting, and materiality ensures that the virtual representation closely matches the intended real-world design.</p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Interior and Exterior Exploration</h2>
                <p className="mb-4 text-justify">Our walkthroughs enable viewers to explore the architectural design's interior and exterior. Users can virtually move through rooms, navigate hallways, and experience the flow of spaces. They can also observe the building's exterior from different angles, understanding its form and integration with the surrounding environment.</p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Mood and Atmosphere</h2>
                <p className="mb-4 text-justify">We understand the importance of capturing a design's intended mood and atmosphere. Our walkthroughs incorporate lighting effects, weather conditions, and material qualities to evoke the desired emotions and create an immersive experience.</p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Attention to Detail</h2>
                <p className="mb-4 text-justify">We pay meticulous attention to every aspect of the architectural design. Our walkthroughs showcase the intricate details of textures, furnishings, and architectural features, accurately representing the design's aesthetics and functionality. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Animation and Cinematic Techniques</h2>
                <p className="mb-4 text-justify">We utilize animation and cinematic techniques to enhance the visual storytelling of the walkthroughs. Smooth camera movements, transitions, and dynamic sequences engage viewers and create an engaging narrative that effectively communicates the design's vision and purpose. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Collaboration and Customization</h2>
                <p className="mb-4 text-justify">We work closely with architects, designers, and clients to ensure the walkthrough meets their specific goals and requirements. Our collaborative approach allows us to incorporate feedback and make necessary adjustments, resulting in a tailored and customized visualization experience. </p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/Walktrough_3.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5 py-5">
          <div className='h-auto flex flex-col xl:flex-row md:flex-row gap-5 justify-between items-center'>
            <div className='flex flex-col justify-center gap-5'>
              <p className='text-white text-md text-justify max-w-screen-lg'>Experience the power of architectural visualization walkthroughs through our portfolio. Each project showcases our commitment to delivering high-quality, immersive experiences that effectively communicate architectural designs, inspire stakeholders, and support decision-making processes.</p>
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