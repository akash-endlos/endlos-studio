import Footer from '@/components/footer/Footer'
import HomeProductionHouse from '@/components/home-page-components/HomeProductionHouse/HomeProductionHouse'
import Navbar from '@/components/navbar/Navbar'
import PortFolioCarousel from '@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel'
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax'
import React from 'react'
import bg from "../../../../public/assets/img1.jpg";


const index = () => {
  return (
    <div>
      <Navbar Navclass="bg-[#111111] text-white" />
      <div className="pt-24 bg-[#111111] text-white">
        <div id="servicesprevirtualization">
          <div className="relative">
            <div className="h-screen bg-cover bg-fixed" style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "300px",
            }}>
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-white">Pre Visualization</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h1 class="text-white text-3xl font-bold mb-4">Welcome to My Site</h1>
            <p class="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla et est euismod malesuada a non sem.</p>
          </div>
        <div className='max-w-7xl px-10 mx-auto'>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="https://picsum.photos/600/400" alt="Image" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h2 class="text-white text-2xl font-bold mb-2">Card 1</h2>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla et est euismod malesuada a non sem.</p>
              </div>
            </div>
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="https://picsum.photos/600/400" alt="Image" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h2 class="text-white text-2xl font-bold mb-2">Card 2</h2>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla et est euismod malesuada a non sem.</p>
              </div>
            </div>
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="https://picsum.photos/600/400" alt="Image" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h2 class="text-white text-2xl font-bold mb-2">Card 1</h2>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla et est euismod malesuada a non sem.</p>
              </div>
            </div>
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="https://picsum.photos/600/400" alt="Image" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h2 class="text-white text-2xl font-bold mb-2">Card 2</h2>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla et est euismod malesuada a non sem.</p>
              </div>
            </div>
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="https://picsum.photos/600/400" alt="Image" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h2 class="text-white text-2xl font-bold mb-2">Card 1</h2>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla et est euismod malesuada a non sem.</p>
              </div>
            </div>
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="https://picsum.photos/600/400" alt="Image" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h2 class="text-white text-2xl font-bold mb-2">Card 2</h2>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla et est euismod malesuada a non sem.</p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
      <div id="servicesprevirtualization">
          <div className="relative">
            <div className="h-screen bg-cover bg-fixed" style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "300px",
            }}>
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-white">Virtual Production</h1>
                </div>
              </div>
            </div>
          </div>
          </div>
      <Footer />
    </div>
  )
}

export default index