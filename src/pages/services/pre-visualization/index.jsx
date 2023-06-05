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
            <h1 className="xl:text-5xl font-bold text-white">Services</h1>
          </div>
        </div>
        <h2 className='px-5 py-5 text-center text-5xl font-bold'>Previsualization</h2>
        <h2 className='px-5 py-5 text-justify text-lg max-w-screen-2xl mx-auto'>Previsualization, often referred to as previs, is the process of creating a preliminary visual representation of a film, animation, or any visual media project before it goes into production. It involves using various techniques such as storyboards, computer-generated imagery (CGI), animatics, and 3D models to visually plan and conceptualize the scenes, camera angles, composition, and overall visual style of the project.The purpose of previsualization is to help the filmmakers and creative team visualize and refine their ideas, identify potential challenges, and make informed decisions before investing time and resources into production. It allows them to explore different creative possibilities, experiment with camera movements and visual effects, and communicate their vision to the rest of the production team.By creating a previs, filmmakers can better understand the flow of the story, anticipate technical requirements, plan for complex action sequences, and even evaluate the feasibility of certain shots or visual effects. It serves as a valuable tool for collaboration, as it enables the director, cinematographer, production designer, and other key members of the creative team to align their vision and make adjustments early on.Overall, previsualization acts as a blueprint for the final product, helping streamline the production process, save time and resources, and ensure a more cohesive and visually compelling end result. It allows filmmakers to make critical decisions in the pre-production stage, leading to a smoother production and ultimately enhancing the overall quality of the finished project.</h2>
      </div>
      <div className='bg-[#111111] '>
        <h2 className='px-5 py-5 text-center text-5xl font-bold text-white'>Where We Can Use Previsualization</h2>
        <div class=" text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 max-w-screen-2xl mx-auto py-5">
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

          {/*  */}
          {/*  */}
        </div>
        <div className='mx-auto max-w-screen-2xl'>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6">
              <div className="relative bg-pink-900 h-full bg-opacity-50 rounded-tr-lg rounded-br-lg overflow-hidden">
                <img className="w-full h-full object-cover object-center"  src="/assets/contact_us.jpg" alt="Image description" />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6">
              <div className="p-8">
                <p className="text-white text-xs text-justify sm:text-sm md:text-lg lg:text-xl mb-4">
                  Forests are truly amazing places. Combining impressive biodiversity with natural beauty, the woods of the world can be both captivating and perplexing. A hike through a forest can be a relaxing way to pass an afternoon or, sometimes, a glimpse into the unknown.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default index