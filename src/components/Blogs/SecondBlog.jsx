import ParallaxImageContainer from "@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer";
import BlogParallaxComponent from "@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent";
import LatestBlogCarousel from "@/components/blog-page-components/LatestBlogCarousel/LatestBlogCarousel";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import BlogShare from "@/shareBlog/shareBlog";
import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineWhatsApp
} from "react-icons/ai";

const SecondBlog = ({ }) => {
  return (
    <div className="w-full">
      <Navbar Navclass="bg-[#111111] text-white" />
      <BlogParallaxComponent title={'Blog'} />
      <div className="bg-[#111111] text-white">
        <div className="py-24 flex items-center justify-center">
          <h1 className="text-5xl max-w-7xl mx-auto px-5 font-bold">The Impact of Virtual Reality on Architecture and Design.</h1>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="pb-10">
            <small>5 May 2023</small>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center py-5 gap-5">
              <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/assets/home-7-img-1.jpg" alt="Bordered avatar" />
              <div className="flex flex-col">
              <small>Navodita Srivastava</small>
                <small>Senior Digital Marketer</small>
              </div>
            </div>
            <BlogShare url={pathname} title={'The Impact of Virtual Reality on Architecture and Design.'}/>
            {/* <div className=" justify-between items-center hidden xl:flex">
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
            </div> */}
          </div>
          <div className="max-w-7xl mx-auto py-10">
            <img src="/assets/blog_inside_vr_2.jpg" className="mx-auto max-w-full h-auto" alt="endlos unreal engine studio" />
            <p className="py-2 pt-5">One of the biggest recent years has been creating architectural applications to use virtual reality. In the future, it was stated that VR wouldn't just be a key element when the presentation of a design; however, it would also be an integral part of the process of designing.</p>
            <p className="py-2">
              The most common challenge for most design-oriented businesses is convincing customers that their product looks identical to - or even superior to a representation in 3D or 2D.
              Whatever the designer's skill level, a client can make an unintentional leap of faith and creativity to help get the design concept on board.

            </p>
            <p className="py-2">
              Architecture isn't an exception. VR technology isn't out of access anymore. It could be used in the coming fifty years. Designers and architects who can save money, attract more clients, and improve remote collaboration use VR technology.
            </p>
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">What is the impact of virtual reality transforming the structure of a building?</h2>
            <p className="py-2">VR offers a lot to design and architecture. VR has the potential to effectively sell an idea superior to another method, including basic designs to collaborative projects and the final details that turn a building from excellent to outstanding.</p>
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">A better clients experience</h2>
            <p className="py-2">One of the most significant challenges architects face when handling customers is how to help them understand the design and concept within a space. Every floor plan, 3D representation, and model is used. However, the devices can convey certain ideas to clients unstructured.</p>
            <p className="py-2">That's where VR can help with the immersive experience. Architects may need to convince their clients that the final result is better than the 2D and 3D models. VR can help them better understand what you can expect from an experience next and interact with the room. The customers can walk around the final destruction and comprehend it from every angle.</p>
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">VR can help you beat your competition</h2>
            <p className="py-2">Presenting your projects is one of the most common methods for convincing future clients of your ideas for architecture, aren't they? You can show your talents and creativity with no method other than virtual reality.</p>
            <p className="py-2">There is nothing more important than this. When it comes to competition, you will certainly be ahead if you start with this technological advancement to compete against famous brands within the industry.</p>
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Collaboration using VR</h2>
            <p className="py-2">Virtual reality facilitates collaboration between contractors, designers, and engineers more effectively. Engineers, architects, and contractors each have ideas about the best way to design a project, which can result in misunderstandings or mistakes.</p>
            <p className="py-2">Virtual reality's use during the design phase lets every team perform better since they can comprehend the design better. Before the VR came out, architects displayed to their customers and then stored 3D models that were usually not accessible to others on the project team.</p>
            <p className="py-2">It is easy to demonstrate to other team members to improve teamwork and understanding. VR is also a great tool for presenting and launching the project in a way that is a powerful marketing instrument. The ability to show the project's future life could contribute to promoting the efforts of any company.</p>
            {/*  */}
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Reduce time by using VR</h2>
            <p className="py-2">According to the experts, presenting your innovative concepts to clients is the most difficult part of the presentation process.</p>
            <p className="py-2">Through VR, You can invite customers to be involved at the start of the design process. Based on your feedback, you can alter or design the fly. This allows you to skip revising cycles, which saves you both time and money.</p>
            {/*  */}
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Designer tool</h2>
            <p className="py-2">VR is a tool to design a space and create a virtual environment. Sometimes, changes are made once you have seen the space live after the space has been created.</p>
            <p className="py-2">It becomes a costly problem if walls are constructed, and adjustments must be made to accommodate the buyer's needs, it becomes a costly problem. Designers can discover a new design approach in the Program through the use of VR systems and also resolve issues before the project can be designed that can be more cost-effective and efficient than relocating an actual space.</p>
            <p className="py-2">This can prevent the need for repeated changes and permits modifications to design processes immediately during discussions of wall colors and furniture choices.</p>
            {/*  */}
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">The benefits of Virtual reality in architecture</h2>
            <div className="max-w-6xl mx-auto">
              <p className="py-2">●	The architect believes that VR has a second benefit: customers and consumers are enthralled. They are immersed in the design they've commissioned by putting on their VR headsets.</p>
              <p className="py-2">●	The 3D immersive experience lets them better visualize what objects might look like and aids in understanding spaces - and even films much superior to other types of display.</p>
              <p className="py-2">●	It also lets users give rapid feedback and observe the changes they need in real-time. A VR interactive can imitate scenarios, talk about and even dismiss real-world scenarios, or adapt these scenarios.</p>
              <p className="py-2">●	In addition to a greater perception of the world that VR provides users, the rapid change suggests that architects can benefit from VR by offering the customer or clients a clear edge in the market.</p>
              <p className="py-2">● VR can also facilitate greater multi-user collaboration when designing structures and speeds up the process of changing the process of designing</p>
            </div>
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">The Future of Virtual Reality</h2>
            <p className="py-2">The potential of virtual reality and the platforms for expanded reality is inexhaustible. The technology is still in its early stage of development and application of the technology. Very soon, VR technologies will be comparable to the use of e-mail within the workplace.</p>
            <p className="py-2">The technology won't be an instrument for the design but is an integral design process component. It will enhance construction, improve collaboration, increase controls on quality, and give an improved customer experience beyond the design element.</p>
            {/*  */}
            {/*  */}
            <h2 className="text-3xl font-bold max-w-7xl mx-auto py-5 px-5">Conclusion</h2>
            <p className="py-2">VR can either substitute for your marketing methods or give you immense worth. VR may be an option; however, it'll be necessary shortly.</p>
            <p className="py-2">Virtual Reality connects designers and consumers in ways we would never have before. VR is growing rapidly in the field of architecture. It can change the building style architects create and how the designs "take" customers.</p>
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

export default SecondBlog;
