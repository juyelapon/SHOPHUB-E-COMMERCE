import React from 'react'
import BackgroundImage from "../assets/images/ecommerce.png"
const Hero = () => {
    return (
        <section class="bg-linear-to-r from-[#2563EB] to-[#1E40AF] py-22.5 mt-0">
            <div className="container">
                <div className='flex gap-y-5 flex-col md:flex-row justify-between items-center'>
                    <div>
                        <h1 className='font-inter font-bold text-4xl w-xs  md:text-[60px] leading-15 text-[#FFFFFF]'>Summer Sale</h1>
                        <p className='font-inter font-normal leading-7 text-base md:text-[20px] text-[#DBEAFE] mt-3'>Up to 70% off on selected items. Limited time offer!</p>
                        <button className='font-bold font-inter text-[16px] bg-[#FFFFFF] text-[#2563EB] px-3 py-2 md:py-3.5 md:pl-8 md:pr-6.5 rounded-lg mt-8'>Shop Now</button>
                    </div>
                    <div> <img src={BackgroundImage} className='' alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default Hero