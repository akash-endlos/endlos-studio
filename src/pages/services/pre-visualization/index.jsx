import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect } from 'react'
import styles from '../../../styles/HomeCarousel.module.css'
import Link from 'next/link'
import { HeadTag } from '@/components/HeaadTag/HeadTag'
import { useDispatch, useSelector } from 'react-redux'
import { getMetatags } from '@/redux/action/metatags/creator'
import { useRouter } from 'next/router'
import Head from 'next/head'

const index = () => {
  const metaTags = useSelector((state) => state.allMetatags.payload);
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
      {metaTags ? (<HeadTag metaTags={metaTags} />) : (<Head>
        <title> What is Pre visualization? | Endlos Studio| Endlos Studio </title>
        <meta name="description" content=" Boost your project's success with pre visualization services.Experience dynamic visualizations,streamlined workflows & enhanced collaboration." />
        <meta name="keywords" content=" Virtual Production, virtual reality, augmented reality, visualization, motion capture " />
        <meta property="og:title" content=" What is Pre visualization? | Endlos Studio" />
        <meta property="og:description" content=" Boost your project's success with pre visualization services.Experience dynamic visualizations,streamlined workflows & enhanced collaboration." />
        <meta property="og:site_name" content="Endlos Studio " />
        <meta property="og:type" content="article" />
        <meta property="og:image" content=" https://endlos.studio/assets/logo.png " />
        <meta property="og:url" content="https://endlos.studio/services/pre-visualization" />
        <meta name="twitter:title" content=" What is Pre visualization? | Endlos Studio" />
        <meta name="twitter:description" content=" Boost your project's success with pre visualization services.Experience dynamic visualizations,streamlined workflows & enhanced collaboration" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/services/pre-visualization" />
        <meta name="twitter:image" content=" https://endlos.studio/assets/logo.png " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href=" https://endlos.studio/services/pre-visualization" />
      </Head>)}
      
      <Navbar />
      <div className='bg-[#111111] text-white'>
        <div className="relative">
          <video src='/assets/Pre visualization1.mp4' autoPlay loop muted className={`${styles.videocontainer}  `} />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center gap-4 justify-center px-5 bg-opacity-60 bg-black ">
            <h1 className="text-white xl:text-5xl md:text-xl max-w-screen-md px-5 font-extrabold">Pre Visualization</h1>
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
                <p className="mb-4 text-justify">Our pre visualization services offer a comprehensive and detailed approach to planning and visualizing complex scenes and sequences before they are brought to life. By leveraging advanced 3D technology and creative expertise, we help you streamline your production process, enhance communication, and optimize resource allocation. From storyboarding and animatics to virtual set design, our pre visualization services empower you to visualize your project precisely and confidently.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-[#111111] px-5'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-2xl mx-auto py-10">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/archviz_1.jpg" alt="pre visualization studio" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/prev_2.jpg" alt="endlos pre visualization studio" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/prev_3.jpg" alt="endlos visual storytelling" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/prev_4.jpg" alt="endlos visual studio" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/prev_5.jpg" alt="visual studio" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/prev_6.jpg" alt="visualization studio" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/prev_7.jpg" alt="unreal engine studio" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/assets/prev_8.jpg" alt="visual storytelling studio" />
            </div>
          </div>
        </div>




        <div className='max-w-screen-2xl mx-auto'>
          <p className='text-white font-semibold py-10 flex justify-center xl:justify-start '>HOW WE DO IT</p>
          <div className="max-w-screen-2xl mx-auto px-5">
            <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
              <div className="col-span-12 lg:col-span-4">
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-4xl  text-white max-w-sm font-bold mb-4">Pre Visualization Services</h3>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                  <p className="mb-4 text-justify">Pre Visualization, also known as Previs, is a crucial stage in the production process. It allows filmmakers, game developers, and architects to visualize their ideas before committing to the final execution. At Endlos Studio, we offer comprehensive Pre Visualization services that help you plan and refine your project accurately and clearly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-screen-2xl mx-auto py-1'>
          <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Conceptualizing Ideas</h3>
                <p className="mb-4 text-justify">Our team works closely with you to understand and translate your creative vision into a visual representation. Through storyboards, concept art, and 3D mock-ups, we bring your ideas to life, allowing you to visualize and refine your project from the early stages. </p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Scene Layout and Blocking</h3>
                <p className="mb-4 text-justify">With our expertise in scene layout and blocking, we help you plan the composition and movement of characters, cameras, and objects within the virtual environment. This process enables you to experiment with different perspectives, camera angles, and staging, ensuring your story is effectively communicated.</p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Dynamic Camera Animations</h3>
                <p className="mb-4 text-justify">We create dynamic camera animations that simulate the movement and framing of shots. By previsualizing camera movements, we help you identify the most impactful angles and transitions, enhancing the cinematic experience.</p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/Pre_Visualization_1.jpg" alt="storytelling studio" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/Pre_Visualization_2.jpg" alt="pre visualization image" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-start text-white h-full">
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Timing and Pacing</h3>
                <p className="mb-4 text-justify">Previs allows us to establish the timing and pacing of scenes, ensuring a smooth and coherent flow throughout your project. By visualizing the sequence of events, you can fine-tune the rhythm, transitions, and dramatic moments, resulting in a more engaging and compelling outcome.</p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Collaboration and Feedback</h3>
                <p className="mb-4 text-justify">We believe in collaboration and value your input throughout the Pre Visualization process. We provide regular updates and seek feedback to ensure that the final result aligns with your creative vision. Our iterative approach allows for seamless communication and adjustments, ensuring your satisfaction with the final product. </p>
                <p className="mb-4 text-justify">Pre Visualization is an essential step that helps streamline the production process, saving time and resources by identifying potential issues early on. With our Pre Visualization services, you can confidently move forward with your project, knowing that you have a clear roadmap and a solid foundation for execution.</p>
              </div>
            </div>

          </div>
          <div className='max-w-screen-2xl mx-auto'>
            <p className='text-white font-semibold py-10 flex justify-center xl:justify-start '>HOW WE DO IT</p>
            <div className="max-w-screen-2xl mx-auto px-5">
              <div className="grid xl:grid-cols-12 lg:grid-flow-row py-10">
                <div className="col-span-12 lg:col-span-4">
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-4xl  text-white max-w-sm font-bold mb-4">Our Pre Visualization Portfolio</h2>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <div className="flex flex-col justify-start text-white h-full text-xl  leading-8">
                    <p className="mb-4 text-justify">Pre Visualization plays a crucial role in the early stages of filmmaking, allowing filmmakers to visualize and plan their projects before entering production. Our portfolio in Pre Visualization showcases our expertise in this important aspect of the filmmaking process, highlighting the successful projects we have delivered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 py-10">
            <div className="xl:col-span-6 col-span-12">
              <img src="/assets/Pre_Visualization_4.jpg" alt="pre visualization picture" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <div className="flex flex-col justify-start text-white h-full">
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Storytelling Visualization</h3>
                <p className="mb-4 text-justify">Explore our portfolio to witness our ability to bring scripts and storyboards to life through visual storytelling. We demonstrate how we transform written narratives into dynamic and engaging visual sequences, providing a clear roadmap for the production process. </p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Scene Layout and Composition</h3>
                <p className="mb-4 text-justify">Our portfolio showcases our scene layout and composition expertise. We emphasize the importance of camera placement, shot selection, and overall scene composition in effectively conveying the story and capturing the desired mood and emotions. </p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Shot Planning and Camera Movements</h3>
                <p className="mb-4 text-justify">Witness our ability to plan and visualize complex camera movements and shots. We demonstrate how we work closely with directors and cinematographers to develop shot sequences, including dolly moves, crane shots, and dynamic camera angles, ensuring a well-crafted visual narrative.</p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-12  py-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="flex flex-col justify-start items-center xl:items-start text-white h-full">
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Timing and Pacing</h3>
                <p className="mb-4 text-justify">Our portfolio highlights our attention to timing and pacing in previsualization. We showcase how we accurately represent the timing and rhythm of the final film, ensuring that scenes flow seamlessly and capture the desired dramatic impact. </p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Visual Effects Previsualization</h3>
                <p className="mb-4 text-justify">Experience our expertise in previsualizing visual effects sequences. We demonstrate how we integrate CGI elements and special effects into previsualization, enabling filmmakers to anticipate and plan for complex VFX shots during production.</p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Collaborative Workflow</h3>
                <p className="mb-4 text-justify">Collaboration is at the heart of our previsualization work strategy. Our portfolio showcases successful collaborations with directors, cinematographers, and production teams, highlighting the seamless integration of our previsualization work into the overall filmmaking process.</p>
                <h3 className="text-2xl max-w-screen-sm font-bold mb-4">Iterative Process</h3>
                <p className="mb-4 text-justify">We emphasize the importance of an iterative process in previsualization. Our portfolio demonstrates how we refine and improve previsualizations based on feedback and input from the creative team, ensuring that the final vision aligns with the director's vision and production requirements.</p>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12 xl:pl-5">
              <img src="/assets/Pre_Visualization_3.jpg" alt="endlos pre visualization" className="w-full h-[550px] rounded-2xl" />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default index