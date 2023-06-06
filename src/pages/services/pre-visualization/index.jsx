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

        <div class="max-w-screen-2xl mx-auto px-5">
          <div class="grid xl:grid-cols-12 lg:grid-flow-row py-10">
            <div class="col-span-12 lg:col-span-4">
              <div class="flex flex-col items-start justify-center">
                <h2 class="text-4xl  text-white max-w-sm font-bold mb-4">Your Vision Our Studio Network</h2>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-8">
              <div class="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p class="mb-4 text-justify">With the Vū Network™, we combine the power of creativity and technology to create an environment for collaboration, creative control and freedom. Blurring the lines between what's physical and what's digital, we can take you anywhere you want to go - all from a single location.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-[#111111] '>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-2xl mx-auto py-10">
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="/assets/archviz_1.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="/assets/archviz_2.jpg" alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="/assets/archviz_5.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="/assets/archviz_6.jpg" alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="/assets/archviz_7.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="/assets/archviz_1.jpg" alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="/assets/archviz_3.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="/assets/archviz_5.jpg" alt="" />
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
        <div class="max-w-screen-2xl mx-auto px-5">
          <div class="grid xl:grid-cols-12 lg:grid-flow-row py-10">
            <div class="col-span-12 lg:col-span-4">
              <div class="flex flex-col items-start justify-center">
                <h2 class="text-4xl  text-white max-w-sm font-bold mb-4">Connect For Endless Possibilities</h2>
              </div>
              <button className='rounded-lg bg-black text-white py-3 px-4 font-semibold hover:bg-white hover:text-black'>Connect With Us</button>
            </div>
            <div class="col-span-12 lg:col-span-8">
              <div class="flex flex-col justify-start text-white h-full text-xl  leading-8">
                <p class="mb-4 text-justify">We are providing Unreal Engine Solutions. If you need any assitance for same feel free to connect because we are Here for you</p>
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