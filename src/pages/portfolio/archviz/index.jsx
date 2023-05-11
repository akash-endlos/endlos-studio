import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import bg from "../../../../public/assets/img1.jpg";
import PortFolioParallax from '@/components/portfolio-page-components/PortFolioParallax/PortFolioParallax';


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
                <PortFolioParallax />
                <div class="bg-black flex justify-center items-center max-h-max md:h-80 lg:h-96 p-5">
                    <div class="inset-0 flex justify-center items-center">
                        <div class="text-center">
                            <h1 class="text-5xl font-bold text-white">Archwiz</h1>
                            <p class="mt-4 text-lg text-white font-serif max-w-screen-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem voluptas sunt dolores reprehenderit, quo saepe earum nesciunt magnam officiis incidunt totam dolorem suscipit veniam temporibus adipisci molestias ipsa rem. Odit optio rerum atque neque nulla ipsam quaerat reiciendis hic perferendis, et harum veritatis, architecto quidem eveniet</p>
                        </div>
                    </div>
                </div>
                
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>




            </div>
            <Footer />
        </>
    )
}

export default index