import React from 'react'
import CustomerReviewCarousel from '../CustomerReviewCarousel/CustomerReviewCarousel'
import bg from "../../../../public/assets/img1.jpg";

const CustomerReviewSection = () => {
  return (
    <>
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
                            <h3 className="text-3xl font-bold text-white">Customer Review</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-black flex justify-center items-center max-h-max md:h-40 lg:h-40 p-5">
                <div className="inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-white">Reviews</h3>
                    </div>
                </div>
            </div>
            </div>
            <CustomerReviewCarousel/>
    </>
  )
}

export default CustomerReviewSection