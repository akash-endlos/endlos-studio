import { HeadTag } from '@/components/HeaadTag/HeadTag'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      <HeadTag />
    <Navbar/>
    <div className="pt-24 bg-[#111111] text-white px-5">
        <div className='max-w-screen-2xl mx-auto py-10'>
        <h1 className='text-3xl py-5'>Terms And Conditions</h1>
        <p>Please read these terms and conditions carefully before using Our Service.</p>
        <h2 className='text-2xl pt-5 pb-2'>1. Interpretation</h2>
        <p className='py-2'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
         <h2 className='text-2xl pt-5 pb-2'>2. Definitions</h2>
         <span>For the purposes of these Terms and Conditions:</span>
         <p className='py-2'>•	<span className='font-semibold'>Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
         <p className='py-2'>• <span className='font-semibold'>Country</span> refers to: Gujarat, India</p>
         <p className='py-2'>•	<span className='font-semibold'>Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Endlos Studio , 1108, Shivalik Shilp, Iskcon Cross Rd, Sanidhya, Ahmedabad 380015, Gujarat, India.</p>
         <p className='py-2'>•	<span className='font-semibold'>Device</span> means any device that can access the service such as a computer, a cellphone or a digital tablet.</p>
         <p className='py-2'>•	<span className='font-semibold'>Service</span> refers to the Website.</p>
         <p className='py-2'>•	<span className='font-semibold'>Terms and Conditions </span> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between you and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the TermsFeed Terms and Conditions Generator.</p>
         <p className='py-2'>•	<span className='font-semibold'>Third-party Social Media Service  </span> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
         <p className='py-2'>•	<span className='font-semibold'>Website</span> refers to Endlos Studio, accessible from <Link target='_blank' className='underline text-blue-400' href='http://endlos.studio/'>http://endlos.studio/</Link></p>
         <p className='py-2'>•	<span className='font-semibold'>You </span>means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
         <h2 className='text-2xl pt-5 pb-2'>Acknowledgment</h2>
         <p className='py-2'>These are the Terms and Conditions governing the use of this service and the agreement that operates between you and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
         <p className='py-2'>Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
         <p className='py-2'>By accessing or using the service you agree to be bound by these Terms and Conditions. If you disagree with any part of these Terms and Conditions then you may not access the Service.</p>
         <p className='py-2'>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
         <p className='py-2'>Your access to and use of the Service is also conditioned on your acceptance of and compliance with the Privacy Policy of the company. Our Privacy Policy describes our policies and procedures on the collection, use and disclosure of your personal information when you use the Application or the Website and tells you about your privacy rights and how the law protects you. Please read our Privacy Policy carefully before using our service.</p>
         <h2 className='text-2xl pt-5 pb-2'>Changes to These Terms and Conditions</h2>
         <p className='py-2'>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
         <p className='py-2'>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the website and the service.</p>
         <h2 className='text-2xl pt-5 pb-2'>Contact Us</h2>
         <p className='py-2'>If you have any questions about this Privacy Policy, You can contact us:</p>
         <p>•	By email : <span className='underline'>info@endlos.studio</span></p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default index