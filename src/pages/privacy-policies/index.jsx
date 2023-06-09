import { HeadTag } from '@/components/HeaadTag/HeadTag'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const index = () => {
  const metaTags = useSelector((state) => state.allMetatags.payload);
  return (
    <>
<Head>
        <title> Privacy Policy | Endlos Studio</title>
        <meta name="description" content="Unlock the secrets to safeguarding your personal data. Discover the crucial elements of an effective privacy policy and ensure your online confidentiality" />
        <meta name="keywords" content="Privacy Policy , Endlos Studio" />
        <meta property="og:title" content="Privacy Policy | Endlos Studio " />
        <meta property="og:description" content="Unlock the secrets to safeguarding your personal data. Discover the crucial elements of an effective privacy policy and ensure your online confidentiality" />
        <meta property="og:site_name" content="Endlos Studio " />
        <meta property="og:type" content="article" />
        <meta property="og:image" content=" https://endlos.studio/assets/logo.png " />
        <meta property="og:url" content="https://endlos.studio/privacy-policies " />
        <meta name="twitter:title" content="Privacy Policy | Endlos Studio " />
        <meta name="twitter:description" content="Unlock the secrets to safeguarding your personal data. Discover the crucial elements of an effective privacy policy and ensure your online confidentiality" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/privacy-policies " />
        <meta name="twitter:image" content=" https://endlos.studio/assets/logo.png " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://endlos.studio/privacy-policies " />
      </Head>

      <Navbar />
      <div className="pt-24 bg-[#111111] text-white px-5">
        <div className='max-w-screen-2xl mx-auto py-10'>
          <h1 className='text-3xl py-5'>Privacy Policy for Endlos Studio</h1>
          <p>This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use the service and tells you about your privacy rights and how the law protects you.</p>
          <p className='py-2'>We use your personal data to provide and improve the service. By using the service, you agree to the collection and use of information in accordance with this Privacy Policy. </p>
          <h3 className='text-2xl pt-5 pb-2'>1. Interpretation</h3>
          <p className='py-2'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          <h3 className='text-2xl pt-5 pb-2'>2. Definitions</h3>
          <span>For the purposes of this Privacy Policy:</span>
          <p className='py-2'>•	<span className='font-semibold'>Account</span> means a unique account created for you to access our service or parts of our service.</p>
          <p className='py-2'>•	<span className='font-semibold'>Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
          <p className='py-2'>•	<span className='font-semibold'>Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Endlos Studio , 1108, Shivalik Shilp, Iskcon Cross Rd, Sanidhya, Ahmedabad 380015, Gujarat, India.</p>
          <p className='py-2'>•	<span className='font-semibold'>Cookies</span> are small files that are placed on your computer, mobile device or any other device by a website, containing the details of your browsing history on that website among its many uses.</p>
          <p className='py-2'>• <span className='font-semibold'>Country</span> refers to: Gujarat, India</p>
          <p className='py-2'>•	<span className='font-semibold'>Device</span> means any device that can access the service such as a computer, a cellphone or a digital tablet.</p>
          <p className='py-2'>•	<span className='font-semibold'>Personal Data</span> is any information that relates to an identified or identifiable individual.</p>
          <p className='py-2'>•	<span className='font-semibold'>Service</span> refers to the Website.</p>
          <p className='py-2'>•	<span className='font-semibold'>Service Provider</span> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the service or to assist the Company in analyzing how the service is used.</p>
          <p className='py-2'>•	<span className='font-semibold'>Usage Data</span> refers to data collected automatically, either generated by the use of the service or from the service infrastructure itself (for example, the duration of a page visit).</p>
          <p className='py-2'>•	<span className='font-semibold'>Website</span> refers to Endlos Studio, accessible from <Link target='_blank' className='underline text-blue-400' href='http://endlos.studio/'>http://endlos.studio/</Link></p>
          <p>•	<span className='font-semibold'>You</span> means the individual accessing or using the service, or the company, or other legal entity on behalf of which such individual is accessing or using the service, as applicable.</p>
          <h3 className='text-2xl pt-5 pb-2'>Information from Third-Party Social Media Services</h3>
          <p className='py-2'>The Company allows you to create an account and log in to use the Service through the following Third-party social media services:</p>
          <p className='py-2'>•	<span className='font-semibold'>Google</span></p>
          <p className='py-2'>•	<span className='font-semibold'>Facebook</span></p>
          <p className='py-2'>•	<span className='font-semibold'>Twitter</span></p>
          <p className='py-2'>•	<span className='font-semibold'>LinkedIn</span></p>
          <h3 className='text-2xl pt-5 pb-2'>Changes to this Privacy Policy</h3>
          <p className='py-2'>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <p className='py-2'>We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
          <p className='py-2'>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          <h3 className='text-2xl pt-5 pb-2'>Contact Us</h3>
          <p className='py-2'>If you have any questions about this Privacy Policy, You can contact us:</p>
          <p>•	By email : <span className='underline'>info@endlos.studio</span></p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default index