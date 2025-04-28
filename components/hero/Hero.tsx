'use client'

import { CornCardProps } from "@/utils/type"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';
import OtherInfo from "./OtherInfo";

const Hero = ({ corns }: { corns: CornCardProps[] }) => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    corns.map((corn) => {
                        return (
                            
                                <SwiperSlide key={corn.image} className="group">
                                    <div className="relative rounded-md overflow-hidden">
                                        <img
                                            className="w-full h-[600px] object-cover p-20 brightness-75 group-hover:brightness-50 transition-all duration-300"

                                            src={corn.image} />
                                        <div className="absolute bottom-15 left-10 z-50">
                                            <div className="col-span-4 mb-4 flex h-full flex-1 justify-end px-5 md:mb-4 md:justify-end md:px-10">
                                                <OtherInfo corn={corn}/>
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>
                            

                        )

                    })
                }

            </Swiper>
        </div>
    )
}
export default Hero