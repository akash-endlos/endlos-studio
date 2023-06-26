import React from 'react'

const HomeServices = () => {
  return (
    <div className='bg-[#111111]'>
      <div className="mx-auto max-w-screen-2xl pb-5  " >
        <p className='text-center font-bold text-4xl text-white pt-10 pb-16'>OUR SERVICES</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10">
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/icons-01.jpg" alt="unreal engine virtual production" />
            <h3 className="text-2xl font-semibold mb-2 text-[#b6b6b6]">Virtual Production</h3>
            <p className="text-[#b6b6b6] text-justify">Revolutionize filmmaking with Virtual Production, where real-time computer graphics meet live-action, creating immersive environments and reducing post-production time. Experience the future of storytelling, seamlessly merging physical and digital worlds with Endlos Studio's expertise in Virtual Production using Unreal Engine.
            </p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/icons-02.jpg" alt="unreal engine architectural visualization" />
            <h3 className="text-2xl font-semibold mb-2 text-[#b6b6b6] ">Architectural Visualization</h3>
            <p className="text-[#b6b6b6] text-justify">Unleash the power of architectural visualization, transforming concepts into vivid reality with stunning visuals and immersive virtual environments. Experience the future of architectural design and presentation with Endlos Studio's expertise in creating captivating and lifelike visualizations that bring projects to life.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/icons-03.jpg" alt="unreal engine pre visualization" />
            <h3 className="text-2xl font-semibold mb-2 text-[#b6b6b6]">Pre Visualization</h3>
            <p className="text-[#b6b6b6] text-justify">Discover our pre visualization projects that offer a glimpse into the meticulous planning and visualization process. From detailed storyboards and animatics to 3D asset creation and virtual set designs, our portfolio demonstrates the power of pre visualization in streamlining production workflows.
            </p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/icons-04.jpg" alt="unreal engine game development" />
            <h3 className="text-2xl font-semibold mb-2 text-[#b6b6b6]">Game Development</h3>
            <p className="text-[#b6b6b6] text-justify ">Unleash your gaming vision with Endlos Studio, where groundbreaking gameplay mechanics and captivating worlds converge, creating unforgettable gaming experiences. Harness our expertise in game development and innovative technologies to bring your ideas to life and captivate players worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeServices