import React, { useRef, useState } from 'react'
import bg from "../../../../public/assets/write_us_bg.jpg";
import FormContainer from '@/components/form-container/FormContainer';
import { AiFillPlayCircle,AiOutlinePauseCircle } from 'react-icons/ai'

const HomeWriteUsContainer = () => {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
    return (
        <div className="w-full bg-[#111111]">
            <div className="bg-[#111111] flex justify-center items-center py-16 p-5 border-t-2 border-gray-900 rounded-sm">
                <div className="inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white">
                            What do you think about us
                        </h1>
                    </div>
                </div>
            </div>
            {/* <div
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "auto",
                }}
            > */}
            <div className='container mx-auto py-10 px-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormContainer />
                    {/* <div className="relative aspect-video overflow-hidden rounded-3xl">
                            <video className="w-full opacity-100" src='../assets/write_us_video.mp4' autoPlay muted loop></video>
                        </div> */}
                    <div
      className="relative aspect-video overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video className="w-full opacity-100" src="../assets/write_us_video.mp4" ref={videoRef}></video>
      <div className="absolute inset-0 flex items-center justify-center">
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div onClick={handlePlayPause} className="bg-black bg-opacity-50 rounded-full p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
              {isPlaying ? (
                <AiOutlinePauseCircle size={70} color="white" />
              ) : (
                <AiFillPlayCircle size={70} color="white" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default HomeWriteUsContainer