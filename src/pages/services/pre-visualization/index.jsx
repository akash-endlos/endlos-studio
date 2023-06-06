import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const index = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#111111] text-white'>
        <div className="relative">
          <img
            src="/assets/contact_us.jpg"
            alt="dummy-img"
            className="mx-auto w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="xl:text-5xl font-bold text-white">Previsualization</h1>
          </div>
        </div>

        <div class="z-30 relative items-center justify-center w-full h-full ">
          <div class="inset-0 h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url("/assets/spice_route.jpg")`,
            }}
          >
          </div>
          <div class="absolute inset-0 z-20 flex items-center justify-center h-[600px] w-full bg-gray-900 bg-opacity-75"></div>
          <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
            <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url("/assets/spice_route.jpg")`,
              }}>

              <div class="grid grid-cols-12 gap-1 bg-gray-900 bg-opacity-50">
                <div class="relative  my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                  <div class="border-l-4  border-gray-200 py-20 px-5 mx-2 absolute left-0">
                    <p class="italic  text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                      Previsualization
                    </p>
                  </div>
                  <div class="text-white font-semibold text-xl mb-4">Previsualization</div>
                  <div class="absolute border-gray-200 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                  <div class="relative bg-green-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                    <div class="p-8">
                      <p class="text-gray-100 text-xs md:text-sm lg:text-xl mb-4">
                        Previsualization, often referred to as previs, is the process of creating a preliminary visual representation of a film, animation, or any visual media project before it goes into production.
                      </p>
                      <div class="bottom-0 absolute p-2 right-0">
                        <button class="opacity-75  hover:bg-gray-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>LEARN MORE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#111111] '>
        {/* <h2 className='px-5 py-20 text-center text-5xl font-bold text-white'>Where We Can Use Previsualization</h2> */}
        {/* <div class=" text-white px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 max-w-screen-2xl mx-auto py-5">
          <div class="bg-[#333333] shadow-lg cursor-pointer rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:rotate-1 hover:scale-105 transition-all duration-300">
            <img src="/assets/contact_us.jpg" alt="Image description" class="w-full h-40" />
            <div class="p-4">
              <p class="text-white text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illo facilis omnis saepe voluptatum repudiandae nam. Distinctio, fuga quisquam dicta, optio asperiores deserunt ipsum facere officiis dolorum est obcaecati accusantium? Consequuntur doloribus obcaecati praesentium aliquid cupiditate alias, in eos ad error veniam eaque ut sequi sunt necessitatibus</p>
            </div>
          </div>
          <div class="bg-[#333333] shadow-lg cursor-pointer rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:rotate-1 hover:scale-105 transition-all duration-300">
            <img src="/assets/contact_us.jpg" alt="Image description" class="w-full h-40" />
            <div class="p-4">
              <p class="text-white text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illo facilis omnis saepe voluptatum repudiandae nam. Distinctio, fuga quisquam dicta, optio asperiores deserunt ipsum facere officiis dolorum est obcaecati accusantium? Consequuntur doloribus obcaecati praesentium aliquid cupiditate alias, in eos ad error veniam eaque ut sequi sunt necessitatibus</p>
            </div>
          </div>
          <div class="bg-[#333333] shadow-lg cursor-pointer rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:rotate-1 hover:scale-105 transition-all duration-300">
            <img src="/assets/contact_us.jpg" alt="Image description" class="w-full h-40" />
            <div class="p-4">
              <p class="text-white text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illo facilis omnis saepe voluptatum repudiandae nam. Distinctio, fuga quisquam dicta, optio asperiores deserunt ipsum facere officiis dolorum est obcaecati accusantium? Consequuntur doloribus obcaecati praesentium aliquid cupiditate alias, in eos ad error veniam eaque ut sequi sunt necessitatibus</p>
            </div>
          </div>
          <div class="bg-[#333333] shadow-lg cursor-pointer rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:rotate-1 hover:scale-105 transition-all duration-300">
            <img src="/assets/contact_us.jpg" alt="Image description" class="w-full h-40" />
            <div class="p-4">
              <p class="text-white text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illo facilis omnis saepe voluptatum repudiandae nam. Distinctio, fuga quisquam dicta, optio asperiores deserunt ipsum facere officiis dolorum est obcaecati accusantium? Consequuntur doloribus obcaecati praesentium aliquid cupiditate alias, in eos ad error veniam eaque ut sequi sunt necessitatibus</p>
            </div>
          </div>
        </div> */}

        <div className='max-w-screen-2xl mx-auto'>
          <p className='text-white font-semibold py-10'>HOW WE DO IT</p>
          <div class="grid grid-cols-12  py-10">
            <div class="col-span-4">
              <div className='flex flex-col items-start justify-center'>
                <h2 class="text-5xl text-white max-w-screen-sm font-bold mb-4">Your Vision.
                </h2>
                <span class="text-5xl text-white max-w-screen-sm font-bold mb-4">Our Studio Network.</span>
              </div>
            </div>
            <div class="col-span-8">
              <div class="flex flex-col justify-start text-white h-full text-xl leading-10">
                <p class="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
              </div>
            </div>


          </div>
        </div>


        <h2 className='font-bold text-3xl text-center text-white py-10'>HOW CAN THIS SERVICE HELP YOU</h2>
        <p className='py-10 text-white max-w-screen-2xl mx-auto text-center'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet, a cursus ipsum ante quis turpis urna non tincidunt mattis, tortor neque adipiscing.</p>
        <div className='max-w-screen-2xl mx-auto py-1'>
          <div class="grid grid-cols-12 gap-10 py-10">
            <div class="col-span-6">
              <div class="flex flex-col justify-start text-white h-full">
                <h2 class="text-6xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 class="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p class="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 class="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p class="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>
            <div class="col-span-6">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" class="w-full h-[500px] rounded-2xl" />
            </div>
          </div>
          <p className='text-white font-semibold py-10'>HOW WE DO IT</p>
          <div class="grid grid-cols-12  py-10">
            <div class="col-span-4">
              <div className='flex flex-col items-start justify-center'>
                <h2 class="text-5xl text-white max-w-screen-sm font-bold mb-4">Your Vision.
                </h2>
                <span class="text-5xl text-white max-w-screen-sm font-bold mb-4">Our Studio Network.</span>
              </div>
            </div>
            <div class="col-span-8">
              <div class="flex flex-col justify-start text-white h-full text-xl leading-10">
                <p class="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-10 py-10">
            <div class="col-span-6">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" class="w-full h-[500px] rounded-2xl" />
            </div>
            <div class="col-span-6">
              <div class="flex flex-col justify-end text-white h-full">
                <h2 class="text-6xl max-w-screen-sm font-bold mb-4">Environment Design and Production Management</h2>
                <h2 class="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p class="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. </p>
                <h2 class="text-2xl max-w-screen-sm font-bold mb-4">Unreal Environment Design</h2>
                <p class="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. </p>
              </div>
            </div>

          </div>
        </div>
        <div className='max-w-screen-2xl mx-auto'>
          <p className='text-white font-semibold py-10'>HOW WE DO IT</p>
          <div class="grid grid-cols-12  py-10">
            <div class="col-span-4">
              <div className='flex flex-col items-start justify-center'>
                <h2 class="text-5xl text-white max-w-screen-sm font-bold mb-4">Your Vision.
                </h2>
                <span class="text-5xl text-white max-w-screen-sm font-bold mb-4">Our Studio Network.</span>
              </div>
            </div>
            <div class="col-span-8">
              <div class="flex flex-col justify-start text-white h-full text-xl leading-10">
                <p class="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
              </div>
            </div>


          </div>
        </div>
        <div className="bg-[#111111] max-w-screen-2xl mx-auto py-10">
          <div class="flex justify-center items-center px-10">
            <div class="xl:w-full">
              <div class="rounded-3xl overflow-hidden">
                <video src='../assets/write_us_video.mp4' class="w-full h-auto" controls></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-b border-gray-200'></div>

      <Footer />
    </>
  )
}

export default index