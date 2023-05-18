import React from 'react'

const HomeServices = () => {
  return (
    <div className='bg-[#111111]'>
      <div className="mx-auto max-w-screen-2xl py-5  " data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="500">
        <p className='text-center font-bold text-4xl text-white py-10'>OUR SERVICES</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10">
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_1.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">Virtual Production</h2>
            <p className="text-[#b6b6b6] text-justify">Revolutionize filmmaking with Virtual Production, where real-time computer graphics meet live-action, creating immersive environments and reducing post-production time. Experience the future of storytelling, seamlessly merging physical and digital worlds with Endlos Studio's expertise in Virtual Production using Unreal Engine.
            </p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_2.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6] ">Architecture Visualization</h2>
            <p className="text-[#b6b6b6] text-justify">Unleash the power of architectural visualization, transforming concepts into vivid reality with stunning visuals and immersive virtual environments. Experience the future of architectural design and presentation with Endlos Studio's expertise in creating captivating and lifelike visualizations that bring projects to life.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_3.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">Interactive</h2>
            <p className="text-[#b6b6b6] text-justify">Embark on interactive adventures that blur the line between imagination and reality as Endlos Studio crafts immersive experiences that respond to your every move. Explore new dimensions of entertainment with our expertise in interactive storytelling and cutting-edge technologies.
            </p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_4.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">Game Development</h2>
            <p className="text-[#b6b6b6] text-justify ">Unleash your gaming vision with Endlos Studio, where groundbreaking gameplay mechanics and captivating worlds converge, creating unforgettable gaming experiences. Harness our expertise in game development and innovative technologies to bring your ideas to life and captivate players worldwide.
            </p>
          </div>
          {/* <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_5.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">ACADEMY AWARDS</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_6.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">CINEMAS</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> */}
          {/* <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_2.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">BLOCK BUSTERS</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_2.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">PRODUCTION</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomeServices