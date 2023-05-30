import React from "react";
import bg from "../../../../public/assets/our_vision.jpg";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { FiUserCheck, FiThumbsUp } from "react-icons/fi";
import { BiCheckShield } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div
          className="h-screen bg-cover bg-fixed"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "495px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-justify">
              <h1 className="text-5xl font-bold text-white">Our Vision</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black flex justify-center items-center max-h-max md:h-48 lg:h-48 p-5">
        <div className="inset-0 flex justify-center items-center">
          <div className="text-justify">
            <p className="mt-4 text-lg text-white font-serif max-w-screen-lg leading-10 text-justify">
              Our vision at Endlos Studio is to be a leading creative force in
              visual storytelling and interactive experiences. We aim to push
              the boundaries of technology and creativity, delivering
              groundbreaking solutions that captivate and inspire audiences
              worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#111111] text-white">
      <h2 className="text-3xl font-bold text-white py-10 text-center">Core Values</h2>
        <div className=" grid  lg:grid-cols-3 md:grid-cols-2 pt-10 pb-16 max-w-7xl mx-auto gap-20 px-5">
          <div className="flex justify-center items-center flex-col">
            <TbBulb size={45} />
            <p className="text-justify py-2">Innovation</p>
            <p className="lead text-justify">
              We embrace innovation and constantly seek new ways to push the
              boundaries of what is possible. We thrive on exploring
              cutting-edge technologies and techniques to deliver unique and
              groundbreaking solutions.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <BiCheckShield size={45} />
            <p className="text-justify py-2">Excellence</p>
            <p className="lead text-justify">
              We strive for excellence in everything we do. From concept
              development to execution, we maintain the highest standards of
              quality and craftsmanship, ensuring that every project we
              undertake surpasses expectations.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col pt-10">
            <FiThumbsUp size={40} />
            <p className="text-justify py-2">Collaboration</p>
            <p className="lead text-justify">
              We believe in the power of collaboration. Endlos Studio fosters
              open communication and builds strong partnerships by working
              closely with our clients. We value the input and ideas of our
              clients and aim to create a collaborative environment that fosters
              creativity and mutual success.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <TbBulb size={45} />
            <p className="text-justify py-2">Creativity</p>
            <p className="lead text-justify">
              Creativity is at the core of our work. We encourage out-of-the-box
              thinking and embrace artistic expression in all our projects. Our
              team of talented artists, designers, and developers bring their
              unique perspectives and creative vision to every endeavor.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <TbBulb size={45} />
            <p className="text-justify py-2">Client-Centric Approach</p>
            <p className="lead text-justify">
              Our clients are at the heart of everything we do. We listen
              attentively to their needs, understand their goals, and tailor our
              solutions to meet their requirements. We are dedicated to
              providing an exceptional client experience and building
              long-lasting relationships based on trust and mutual success.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <TbBulb size={45} />
            <p className="text-justify py-2">Continuous Growth</p>
            <p className="lead text-justify">
              We are committed to constant growth and learning. We invest in
              developing our team and staying up-to-date with industry trends,
              technologies, and best practices. We ensure we deliver our clients
              the most innovative and impactful solutions by embracing new
              knowledge and skills.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
