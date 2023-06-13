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
                <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Why Choose Endlos Studio</h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p className="mb-4 text-justify">AR (Augmented Reality) and VR (Virtual Reality) are immersive technologies that redefine our interaction with digital content and the world. AR overlays virtual elements onto the real world, enhancing our environment with interactive information and 3D objects. VR, on the other hand, transports us to entirely virtual realms, surrounding us with lifelike simulations. Both AR and VR have diverse applications across industries, offering unique experiences in gaming, education, healthcare, marketing, and more. AR enriches our reality, while VR provides immersive escapades, transforming the way we perceive and engage with the digital and physical worlds.</p>
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
                  <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">AR & VR Services</h2>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                  <p className="mb-4 text-justify">At Endlos Studio, we specialize in creating innovative and immersive AR and VR experiences for architectural visualization. Our AR and VR applications leverage the latest technologies to transform how you interact with and experience architectural designs.</p>
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
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Augmented Reality (AR) Applications</h2>
                <p className="mb-4 text-justify">We develop AR applications that overlay digital content onto the real world, enhancing your perception and understanding of architectural spaces. Through mobile AR apps, interactive installations, and wearable AR devices, we bring your designs to life and provide a dynamic and interactive experience.</p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Virtual Reality (VR) Applications</h2>
                <p className="mb-4 text-justify">Our VR applications transport you into immersive virtual environments where you can fully engage with architectural designs. With the help of head-mounted displays and interactive controllers, you can explore, interact, and experience spaces as if you were physically present, offering an unparalleled sense of immersion. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Interactive Experiences</h2>
                <p className="mb-4 text-justify">Our AR and VR applications are designed to provide interactive experiences that empower you to engage with architectural designs meaningfully. We incorporate interactive elements such as gesture-based controls, spatial tracking, and object manipulation, allowing you to interact with virtual objects and explore different design possibilities. </p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/Ar_VR.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
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
                    <p className="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/Ar_VR_2.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-end text-white h-full">
                {/* <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2> */}
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Realistic Visualizations</h2>
                <p className="mb-4 text-justify">We pride ourselves on creating realistic and visually stunning AR and VR experiences. Our team of skilled artists and designers meticulously craft virtual environments with accurate textures, lighting, and spatial relationships, ensuring high realism and immersion in the virtual world. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Customization and Collaboration</h2>
                <p className="mb-4 text-justify">We understand that each architectural project has unique requirements and objectives. Our team works closely with you to understand your vision and tailor our AR and VR applications to meet your needs. We value collaboration and strive to deliver a solution that exceeds your expectations.</p>
                <p className="mb-4 text-justify">With our AR and VR applications in architectural visualization, you can revolutionize how you showcase and communicate your designs. Whether for client presentations, marketing campaigns, or internal design reviews, our AR and VR solutions provide an interactive and engaging experience that leaves a lasting impression.</p>
              </div>
            </div>

          </div>
          {/* <div className="grid grid-cols-12  py-10">
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
          </div> */}
          <div className='max-w-screen-2xl mx-auto'>
            <p className='text-white font-semibold py-10 flex justify-center xl:justify-start '>HOW WE DO IT</p>
            <div className="max-w-screen-2xl mx-auto px-5">
              <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
                <div className="col-span-12 lg:col-span-4">
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Our Architectural Visualization (AR & VR) portfolio</h2>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                    <p className="mb-4 text-justify">Architectural Visualization in Augmented Reality (AR) and Virtual Reality (VR) takes the experience of exploring architectural designs to a new level. It enables users to interact with and experience virtual architectural models in a highly immersive and engaging manner. Our AR and VR architectural visualization portfolio, showcases our expertise in this cutting-edge field.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/Ar_VR_3.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-end text-white h-full">
                {/* <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Immersive Virtual Reality Experience</h2> */}
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Immersive Virtual Reality Experience</h2>
                <p className="mb-4 text-justify">Step into our portfolio and immerse yourself in virtual reality architectural visualization experiences. Explore architectural designs in a fully immersive virtual environment, where you can navigate and interact with the spaces as if you were physically there. Walk through rooms, examine details, and get a sense of scale and proportion. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Interactive Augmented Reality Applications</h2>
                <p className="mb-4 text-justify">Witness the power of augmented reality in our portfolio. Through our AR architectural visualization, we overlay virtual architectural models onto the real-world environment, allowing users to visualize and interact with designs in their physical surroundings. Interact with virtual furniture, explore different material options, and visualize how the design fits within the space. </p>
                <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Design Evaluation and Iteration</h2>
                <p className="mb-4 text-justify">Our AR and VR architectural visualization tools, provide valuable insights for design evaluation and iteration. Architects and clients can experience the design in a realistic context, identifying potential issues and making informed decisions before construction begins. This iterative process saves time and resources while ensuring the final design meets the desired objectives.</p>
              </div>
            </div>
          </div>
            <div className="grid grid-cols-12  py-10">
              <div className="xl:col-span-6 col-span-12">
                <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                  {/* <h2 className="text-5xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2> */}
                  <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Customization and Personalization</h2>
                  <p className="mb-4 text-justify">Our portfolio highlights our ability to tailor AR and VR experiences to suit specific project requirements. We can customize the virtual environment, lighting conditions, and material options and even incorporate interactive elements, allowing clients a personalized and immersive architectural visualization experience. </p>
                  <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Collaboration and Communication</h2>
                  <p className="mb-4 text-justify">AR and VR architectural visualization enhances collaboration and communication among project stakeholders. Our portfolio showcases how these technologies facilitate effective communication between architects, clients, and other team members by providing a shared virtual space to discuss and refine design concepts. </p>
                  <h2 className="text-2xl max-w-screen-sm font-bold mb-4">Marketing and Presentation Tools</h2>
                  <p className="mb-4 text-justify">Our AR and VR architectural visualization can be powerful marketing and presentation tools. With our portfolio, you can see how these technologies enable architects and developers to showcase their designs to potential clients and investors visually, captivatingly, and interactively. </p>
                </div>
              </div>
              <div className="xl:col-span-6 col-span-12 xl:pl-5">
                <img src="/assets/Ar_VR_4.jpg" alt="Image" className="w-full h-auto rounded-2xl" />
              </div>
            </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5 py-5">
          <div className='h-auto flex flex-col xl:flex-row md:flex-row gap-5 justify-between items-center'>
            <div className='flex flex-col justify-center gap-5'>
              <p className='text-white  text-md text-justify max-w-screen-lg'>Experience the future of architectural visualization through our AR and VR portfolio. Each project exemplifies our commitment to harnessing the power of these technologies to transform how architectural designs are explored, evaluated, and communicated.</p>
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