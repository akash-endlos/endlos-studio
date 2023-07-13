import { faqData } from '@/allcontent/faqData'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import bg from "../../../../public/assets/img1.jpg";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getMetatags } from '@/redux/action/metatags/creator'
import { HeadTag } from '@/components/HeaadTag/HeadTag'
import Head from 'next/head'


const Index = () => {
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
  const [activeIndex, setActiveIndex] = useState(null)
  const [iconRotation, setIconRotation] = useState(0)

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    setIconRotation((prevRotation) => prevRotation + 180)
  }

  return (
    <>
<Head>
        <title> FAQ Guide to Mastering the Unfathomable!</title>
        <meta name="description" content=" Find answers to your questions about Endlos Studio.Explore our comprehensive FAQ page for insights on our services,process and creative techniques" />
        <meta name="keywords" content=" FAQ, unreal engine, Endlos studio" />
        <meta property="og:title" content=" FAQ Guide to Mastering the Unfathomable!" />
        <meta property="og:description" content=" Find answers to your questions about Endlos Studio.Explore our comprehensive FAQ page for insights on our services,process and creative techniques" />
        <meta property="og:site_name" content="Endlos Studio " />
        <meta property="og:type" content="article" />
        <meta property="og:image" content=" https://endlos.studio/assets/logo.png " />
        <meta property="og:url" content="https://endlos.studio/company/faq " />
        <meta name="twitter:title" content=" FAQ Guide to Mastering the Unfathomable!" />
        <meta name="twitter:description" content="Find answers to your questions about Endlos Studio.Explore our comprehensive FAQ page for insights on our services,process and creative techniques" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/company/faq " />
        <meta name="twitter:image" content=" https://endlos.studio/assets/logo.png " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://endlos.studio/company/faq " />
      </Head>
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
              <h1 className="text-5xl font-bold text-white">FAQ</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#111111] text-white py-5'>
        <div className='pt-24 pb-10'>
          <h2 className='text-center text-2xl'>How Can I Help You ?</h2>
        </div>
        <div className='max-w-screen-xl mx-auto px-5'>
          {faqData.map((section, index) => (
            <div
              key={index}
              className='border rounded-md px-5 mt-2 cursor-pointer'
              onClick={() => toggleSection(index)}
            >
              <div className='flex justify-between items-center py-4'>
                <div>{`${index + 1} :- `}{section.title}</div>
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
        <div className='py-16 max-w-screen-xl mx-auto px-5 text-justify'>
          <p className='mb-5'>These FAQs provide a glimpse into our services. If you have any further questions or would like more information, please feel free to contact us.</p>
          <Link href='/contact-us/write-to-us'><button type="button" className="bg-gray-900 hover:bg-white hover:text-black text-md font-bold rounded-md px-5 py-2.5 text-center mr-2 mb-2 ">Contact Us</button></Link>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Index
