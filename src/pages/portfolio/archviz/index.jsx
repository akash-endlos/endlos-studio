import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import bg from "../../../../public/assets/img1.jpg";
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax';
import ArchwizGallery from '@/components/portfolio-page-components/ArchwizGallery/ArchwizGallery';
import HomeVideoCarousel from '@/components/home-page-components/HomeVideoCarousel/HomeVideoCarousel';
import PortFolioCarousel from '@/components/portfolio-page-components/PortFolioCarousel/PortFolioCarousel';


const index = () => {
    const router = useRouter()
    const { id } = router.query;
    useEffect(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [id])

    // <div id="walkthrough"  >
    //                 =====================================================================llllllllllllllllllllllllllllll Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ratione tempore est qui. Quis reiciendis repudiandae, totam incidunt ex obcaecati expedita soluta voluptatem fugiat quibusdam minima, sit vitae veritatis adipisci pariatur eaque ut nobis? Non quibusdam perspiciatis provident, velit ut tempore quis fuga beatae deleniti sed nisi ducimus soluta quisquam reiciendis reprehenderit obcaecati odio corrupti labore quas. Fugit temporibus nesciunt voluptate hic incidunt laudantium necessitatibus sapiente dolores deserunt expedita voluptatem repudiandae sint, vero voluptates eligendi atque enim quasi autem pariatur at quis facere! Repudiandae, quos placeat, neque iste illum dolorum, vitae fugit accusantium magnam blanditiis maiores cum iure alias illo consequuntur quidem atque esse autem odit delectus voluptatem id ad? Dolorem aliquam ex itaque facilis autem nemo id suscipit, iusto quia, alias laudantium!
    //             </div>

    return (
        <>
            <Navbar Navclass="bg-[#111111] text-white" />
            <div className="pt-24 bg-[#111111] text-white">
                <PortFolioParallax title={'Archviz'} subtitle={'Can You Handle The Truth'} />
                <ArchwizGallery />
                <div class='grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
                    {/* <div>
                        <video src='/assets/1.mp4' controls width="100%"></video>
                    </div>
                    <div>
                        <video src='/assets/1.mp4' controls width="100%"></video>
                    </div> */}
                </div>

                <div id="walkthrough">
                    <PortFolioParallax title={'WalkThrough'} subtitle={'Can You Handle The Truth'} btn={true} />
                    <PortFolioCarousel/>
                    {/* <div className='flex justify-center items-center'>
                        <video src='/assets/1.mp4' controls width="100%"></video>
                    </div> */}
                </div>
                <div id="interactive">
                    <PortFolioParallax title={'Interactive'} subtitle={'Can You Handle The Truth'} />
                    <div className='flex justify-center items-center'>
                        <video src='/assets/1.mp4' controls width="100%"></video>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default index