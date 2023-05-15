import React from 'react'
import bg from "../../../../public/assets/img1.jpg";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { FiUserCheck, FiThumbsUp } from "react-icons/fi";
import { BiCheckShield } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";


const index = () => {
    return (
        <div>
            <Navbar />
            <div className="relative">
                <div className="h-screen bg-cover bg-fixed" style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "500px",
                }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">Our Vision</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black flex justify-center items-center max-h-max md:h-80 lg:h-96 p-5">
                <div className="inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-white">CAST & CREW</h1>
                        <p className="mt-4 text-lg text-white font-serif max-w-screen-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem voluptas sunt dolores reprehenderit, quo saepe earum nesciunt magnam officiis incidunt totam dolorem suscipit veniam temporibus adipisci molestias ipsa rem. Odit optio rerum atque neque nulla ipsam quaerat reiciendis hic perferendis, et harum veritatis, architecto quidem eveniet</p>
                    </div>
                </div>
            </div>


          <div className='bg-[#111111] text-white'>
          <div className=" grid  lg:grid-cols-4 md:grid-cols-2 py-5 max-w-7xl mx-auto gap-20 px-5">

<div className="flex justify-center items-center flex-col">
    <FiUserCheck size={45} />
    <p className="text-center py-2">Transparency</p>
    <p className="lead text-center">
        Being transparent is part of our DNA. We believe in transparency in
        the transactions we make.
    </p>
</div>
<div className="flex justify-center items-center flex-col">
    <BiCheckShield size={45} />
    <p className="text-center py-2">Trust</p>
    <p className="lead text-center">
        We serve as trusted advisors for our partners, customers, and
        employees.
    </p>

</div>
<div className="flex justify-center items-center flex-col">
    <FiThumbsUp size={45} />
    <p className="text-center py-2">Customer Success</p>
    <p className="lead text-center">
        As our clients, partners, as well as our employees, expand, so too
        do we.
    </p>
</div>
<div className="flex justify-center items-center flex-col">
    <TbBulb size={45} />
    <p className="text-center py-2">Innovation</p>
    <p className="lead text-center">
        We celebrate creativity and promote collaboration for innovation
    </p>
</div>
<div className="flex justify-center items-center flex-col">
    <TbBulb size={45} />
    <p className="text-center py-2">Innovation</p>
    <p className="lead text-center">
        We celebrate creativity and promote collaboration for innovation
    </p>
</div>
<div className="flex justify-center items-center flex-col">
    <TbBulb size={45} />
    <p className="text-center py-2">Innovation</p>
    <p className="lead text-center">
        We celebrate creativity and promote collaboration for innovation
    </p>
</div>
<div className="flex justify-center items-center flex-col">
    <TbBulb size={45} />
    <p className="text-center py-2">Innovation</p>
    <p className="lead text-center">
        We celebrate creativity and promote collaboration for innovation
    </p>
</div>
<div className="flex justify-center items-center flex-col">
    <TbBulb size={45} />
    <p className="text-center py-2">Innovation</p>
    <p className="lead text-center">
        We celebrate creativity and promote collaboration for innovation
    </p>
</div>
<div className="flex justify-center items-center flex-col">
    <TbBulb size={45} />
    <p className="text-center py-2">Innovation</p>
    <p className="lead text-center">
        We celebrate creativity and promote collaboration for innovation
    </p>
</div>
<div className="flex justify-center items-center flex-col">
    <TbBulb size={45} />
    <p className="text-center py-2">Innovation</p>
    <p className="lead text-center">
        We celebrate creativity and promote collaboration for innovation
    </p>
</div>
</div>
          </div>



            <Footer />
        </div>
    )
}

export default index