import React from 'react'

const HomeServices = () => {
  return (
    <div className='bg-[#111111]'>
      <div className="mx-auto max-w-screen-2xl py-5  "  data-aos="zoom-in" data-aos-easing="ease-in"  data-aos-duration="500">
      <p className='text-center font-bold text-4xl text-white py-10'>SERVICES</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10">
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_1.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">DIRECTOR</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_2.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">TV SHOWS</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_3.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">THEATER</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_4.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">FILM FESTIVALS</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_5.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">ACADEMY AWARDS</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#111111] p-4 text-center">
            <img className="w-full h-48 object-cover mb-2" src="/assets/home_service_6.jpg" alt="Card Image" />
            <h2 className="text-lg font-semibold mb-2 text-[#b6b6b6]">CINEMAS</h2>
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
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