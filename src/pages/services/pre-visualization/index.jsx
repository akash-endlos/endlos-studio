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
              backgroundImage: `url("/assets/contact_us.jpg")`,
            }}
          >
          </div>
          <div class="absolute inset-0 z-20 flex items-center justify-center h-[600px] w-full bg-gray-900 bg-opacity-75"></div>
          <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
            <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url("/assets/contact_us.jpg")`,
              }}>

              <div class="grid grid-cols-12 gap-1">
                <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                  <div class="border-l-4 border-gray-200 py-20 px-5 mx-2 absolute left-0">
                    <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
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
        {/* <h2 className='px-5 py-5 text-center text-5xl font-bold'>Previsualization</h2>
        <h2 className='px-5 py-5 text-justify text-lg max-w-screen-2xl mx-auto'>Previsualization, often referred to as previs, is the process of creating a preliminary visual representation of a film, animation, or any visual media project before it goes into production. It involves using various techniques such as storyboards, computer-generated imagery (CGI), animatics, and 3D models to visually plan and conceptualize the scenes, camera angles, composition, and overall visual style of the project.The purpose of previsualization is to help the filmmakers and creative team visualize and refine their ideas, identify potential challenges, and make informed decisions before investing time and resources into production. It allows them to explore different creative possibilities, experiment with camera movements and visual effects, and communicate their vision to the rest of the production team.By creating a previs, filmmakers can better understand the flow of the story, anticipate technical requirements, plan for complex action sequences, and even evaluate the feasibility of certain shots or visual effects. It serves as a valuable tool for collaboration, as it enables the director, cinematographer, production designer, and other key members of the creative team to align their vision and make adjustments early on.Overall, previsualization acts as a blueprint for the final product, helping streamline the production process, save time and resources, and ensure a more cohesive and visually compelling end result. It allows filmmakers to make critical decisions in the pre-production stage, leading to a smoother production and ultimately enhancing the overall quality of the finished project.</h2> */}
      </div>
      <div className='bg-[#111111] '>
        <h2 className='px-5 py-20 text-center text-5xl font-bold text-white'>Where We Can Use Previsualization</h2>
        <div class=" text-white px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 max-w-screen-2xl mx-auto py-5">
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
        </div>
        <h2 className='font-bold text-3xl text-center text-white py-10'>HOW CAN THIS SERVICE HELP YOU</h2>
        <p className='py-10 text-white max-w-screen-2xl mx-auto text-center'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet, a cursus ipsum ante quis turpis urna non tincidunt mattis, tortor neque adipiscing.</p>

        <div className='max-w-screen-2xl mx-auto py-10'>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-7">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" class="w-full h-auto rounded-2xl" />
            </div>
            <div class="col-span-5">
              <div class="flex flex-col justify-center items-center h-full ">
                <h2 class="text-2xl font-bold text-white mb-4">superdark photoshoot session creative</h2>
                <p class="mb-4 text-white py-5 text-center max-w-screen-md mx-auto">Aesthetic helvetica cred ennui hella subway tile. Migas hexagon actually street art, chia truffaut food truck meh letterpress flexitarian vegan hot chicken kombucha cred.</p>
                <button className='bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded'>Know More</button>
              </div>
            </div>
          </div>
        </div>


        {/*  */}
        <div className='max-w-screen-2xl mx-auto py-1'>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6">
              <div class="flex flex-col justify-start text-white h-full">
                <h2 class="text-2xl font-bold mb-4">Previsualization</h2>
                <p class="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. At magni provident fuga maiores maxime officiis quidem quae, neque quas atque voluptatem placeat voluptatibus labore non laudantium. Tempora eveniet assumenda beatae, quas quaerat amet ullam enim ipsa, illo similique repellat cumque, soluta nihil eligendi sit adipisci placeat labore consectetur. Ipsa, libero obcaecati eaque perspiciatis dignissimos vitae expedita quam voluptatibus et, voluptatum reprehenderit animi minus esse id cupiditate doloremque! Rem iusto officiis placeat odit ipsum, iste unde. Quasi, quae consequuntur eaque iste exercitationem incidunt quas quia libero laborum, veniam beatae ipsum explicabo sapiente, deleniti corporis aperiam at sed magnam pariatur unde? Explicabo neque, iusto architecto quam voluptas tenetur ea! Explicabo autem assumenda, quasi vitae iure quia nemo ab dicta, distinctio soluta voluptates! Ut sequi maxime, quia, mollitia blanditiis ea ullam nulla laudantium optio nam aspernatur voluptatum voluptatem modi officiis temporibus nisi dolor magni accusantium vitae. Distinctio, possimus doloremque sint quibusdam, ut, molestias quas nostrum est ratione nisi ducimus cum? Expedita?</p>
              </div>
            </div>
            <div class="col-span-6">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" class="w-full h-[450px] rounded-2xl" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 py-10">
            <div class="col-span-6">
              <img src="/assets/blog_inside_vr_2.jpg" alt="Image" class="w-full h-[450px] rounded-2xl" />
            </div>
            <div class="col-span-6">
              <div class="flex flex-col justify-start text-white h-full">
                <h2 class="text-2xl font-bold mb-4">Previsualization</h2>
                <p class="mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem quod ex assumenda dolorum voluptas beatae, officiis alias, tempore voluptatibus nam. Eligendi similique illum rerum quos voluptatibus alias dolore asperiores. Blanditiis ducimus ea, magni, praesentium eligendi a tempora distinctio aspernatur laboriosam illo ipsum laudantium voluptatem at obcaecati accusantium eos maxime. At magni provident fuga maiores maxime officiis quidem quae, neque quas atque voluptatem placeat voluptatibus labore non laudantium. Tempora eveniet assumenda beatae, quas quaerat amet ullam enim ipsa, illo similique repellat cumque, soluta nihil eligendi sit adipisci placeat labore consectetur. Ipsa, libero obcaecati eaque perspiciatis dignissimos vitae expedita quam voluptatibus et, voluptatum reprehenderit animi minus esse id cupiditate doloremque! Rem iusto officiis placeat odit ipsum, iste unde. Quasi, quae consequuntur eaque iste exercitationem incidunt quas quia libero laborum, veniam beatae ipsum explicabo sapiente, deleniti corporis aperiam at sed magnam pariatur unde? Explicabo neque, iusto architecto quam voluptas tenetur ea! Explicabo autem assumenda, quasi vitae iure quia nemo ab dicta, distinctio soluta voluptates! Ut sequi maxime, quia, mollitia blanditiis ea ullam nulla laudantium optio nam aspernatur voluptatum voluptatem modi officiis temporibus nisi dolor magni accusantium vitae. Distinctio, possimus doloremque sint quibusdam, ut, molestias quas nostrum est ratione nisi ducimus cum? Expedita?</p>
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