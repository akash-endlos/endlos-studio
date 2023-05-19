import ParallaxImageContainer from "@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer";
import BlogParallaxComponent from "@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent";
import LatestBlogCarousel from "@/components/blog-page-components/LatestBlogCarousel/LatestBlogCarousel";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineWhatsApp
} from "react-icons/ai";

const Blog = ({ }) => {
  return (
    <div className="w-full">
      <Navbar Navclass="bg-[#111111] text-white" />
      <BlogParallaxComponent title={'Blog'} />
      <div className="bg-[#111111] text-white">
        <div className="py-24 flex items-center justify-center">
          <h1 className="text-7xl max-w-7xl mx-auto px-5 font-bold">The Unreal Engine 5.2 is available!</h1>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="pb-10">
            <small>5 May 2023</small>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center py-5 gap-5">
              <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/assets/home-7-img-1.jpg" alt="Bordered avatar" />
              <div className="flex flex-col">
                <small>Yash patel</small>
                <small>Founder Of The Company</small>
              </div>
            </div>
            <div className=" justify-between items-center hidden xl:flex">
              <small className="pr-5 font-semibold">Share On :- </small>
              <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                <AiOutlineWhatsApp size={20} color="white" />
              </span>
              <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                <AiFillInstagram size={20} color="white" />
              </span>
              <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                <AiOutlineTwitter size={20} color="white" />
              </span>
              <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                <AiFillFacebook size={20} color="white" />
              </span>
            </div>
          </div>
          <div className="max-w-7xl mx-auto py-10">
            <img src="/assets/blog_inside_vr_3.jpg" class="mx-auto max-w-full h-auto" alt="example image" />
            <p className="py-2 pt-5">Unreal Engine 5 revolutionized the CGI environment. Unreal Engine 5.2 is now used to let creatives achieve even greater results.</p>
            <p className="py-2">
            Epic Games published the public plan of Unreal Engine 5.2 before GDC 2023 event in March. It's an excellent addition to a point release. It's Unreal Engine 5, so you shouldn't expect anything surprising.

            </p>
            <p className="py-2">
            With support for natively compatible Apple, Silicon is now integrated into Unreal Editor. Unreal Editor, the Universal Binary of Unreal Engine, which fully supports Apple Silicon and Intel CPUs, has been made accessible for download via Epic Games. 
            </p>
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">New features in Unreal Engine 5.2</h2>
            <p className="py-2">Here are some things you can expect from the new version.</p>
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Procedural Content Generation (PCG)</h2>
            <p className="py-2">PCG is a software toolkit that allows making large numbers of objects of trees, for example, by using rules rather than manually putting assets. Like specific landscape-creation software such as Terragen or Vue D'Esprit, the goal is to apply an algorithmic technique to put massive quantities of items like boulders, trees and bushes into a huge area with natural-looking variations for creating richly detailed settings to be utilized in real-time applications.</p>
            <p className="py-2">That's where VR can help with the immersive experience. Architects may need to convince their clients that the final result is better than the 2D and 3D models. VR can help them better understand what you can expect from an experience next and interact with the room. The customers can walk around the final destruction and comprehend it from every angle.</p>
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Substrate</h2>
            <p className="py-2">The Substrate is a brand-new shading model in Unreal, which gives Unreal users a stronger instrument for building appearances and materials. Materials used in 3D graphics are the key to creating photorealistic effects. Therefore, the upgraded materials model is a significant improvement. In addition to the materials system, there is a set of UV tools designed for Unreal that are part of the latest Geometry toolset, which features modelling tools. With Substrate, it is an option to create variations on paint on cars or add mud onto the car's exterior.</p>
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Path Tracing</h2>
            <p className="py-2">Real-time path tracing technology will soon be available in Unreal. Ray tracing has evolved. A leap in photorealism from Ray Tracing is now coming to real-time graphics. Path tracing is available in Unreal, but it's not feature-par compared to Unreal Rasterizer. The new path tracing feature in Engine 5.2 will close the leading lead to greater realism games wind-up production.</p>
            {/*  */}
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Animation</h2>
            <p className="py-2">The animation tools of Unreal get closer to the animation tools of top animation platforms such as Maya and Cinema4D. Animation rig tools and curve editors all receive major improvements, and there is an experimental control system based on physics, allowing secondary animations that are entirely driven by physical objects.</p>
            <p className="py-2">To demonstrate the effectiveness of this technology and to demonstrate the power of all this, there's a brand new ML Deformer example that demonstrates the ways Unreal Engine machine learning technology can be utilized to build high-end real-time characters for consoles and computers with movements driven by full flesh, muscle and cloth simulation. The sample download also includes a live video that shows muscles expanding and sliding beneath the skin and folds that form on clothing.</p>
            {/*  */}
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Metahumans</h2>
            <p className="py-2">The realism of Metahumans is growing. Design tools are getting more sophistication, and editors allow mixing between Metahumans and creating new versions. Skin textures are becoming much more realistic, and in combination with updated animation tools and rendering options, we have been getting closer to ending this Uncanny Valley. Metahuman Creator lets you create the human face by selecting three faces and blending different elements from the three faces to make an individual Metahuman. </p>
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Verse</h2>
            <p className="py-2">Epic is introducing a brand new programming language in Unreal named Verse. Before Verse, the choices were strictly visually oriented programming or C++, and Verse is somewhere between the two. Visual programming can be extremely effective; however, as any has worked with programs like Houdini is aware, it's often easy to write code to create custom logic rather as opposed to programming the logic in nodes when the editor for nodes starts to look like spaghetti. Utilizing C++, however, can be a test due to its more slow feedback loop and the necessity to build and link the codes before running it. The Verse is an inbuilt scripting language that can provide near-instant feedback. This makes coding faster and easier as C++ while also not being restricted by the visual programming using nodes.</p>
            {/*  */}
             {/*  */}
             <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Virtual Production</h2>
            <p className="py-2">It is a key feature of Unreal Engine 5.2 that didn't get the attention it merited when it first came out, likely because it was unveiled at a conference devoted to gaming rather than making films. However, there are some exciting new features. In this release, Epic has pushed them higher to the top of the list to be released.</p>
            <p className="py-2">Unreal 5.2 has improved tracking capabilities and better controls. The software includes a DMX control console with the latest DMX mapping interfaces. If you're not conversant with DMX, explore the possibilities. Since film lighting is becoming nearly entirely digital, the options offered through DMX-controlled lighting have also been growing. </p>
            {/*  */}
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Conclusion</h2>
            <p className="py-2">Many digital production tools are available only to top-end productions, as the volume sound stages remain rare. Even the way computers now call for a high-end device to manage digital production requirements on a Studio stage. The applications are easily accessible to anyone, but they are still very useful even without access to top-of-the-line Workstations with massive volumes.</p>
            <p className="py-2">In addition, the tools are readily available to self-employed filmmakers to begin learning how to utilize them.</p>
            <p className="py-2">One reason which has hindered photorealistic 3D images from being more popular in lower-budget productions has been the rendering process. Smaller independent productions cannot pay for the thousands of compute nodes needed to render photorealistic mattes used in their film. </p>
            <p className="py-2">The enhancements with Unreal Engine 5.2 will close the gap and get ever closer to attaining realistic rendering in real-time using mainstream computing devices. Virtual production is slowly becoming accessible also.</p>
            {/*  */}
            {/*  */}
            {/* <LatestBlogCarousel /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
