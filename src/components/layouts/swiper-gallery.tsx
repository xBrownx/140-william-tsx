import * as React from 'react';import { Navigation, Pagination } from 'swiper/modules';import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';import 'swiper/css';import 'swiper/css/navigation';import 'swiper/css/pagination';type SwiperImage = {    src: string;    alt: string;};type SwiperGalleryProps = {    images: SwiperImage[];};export const SwiperGallery: React.FC<SwiperGalleryProps> = ({ images }) => {    return (        <div            className={`h-full max-h-full max-w-full overflow-hidden rounded-lg`}        >            <Swiper                id={'swiper'}                modules={[Navigation, Pagination]}                spaceBetween={1}                slidesPerView={1}                navigation                pagination={{ clickable: true }}                centeredSlides={true}                style={{                    height: '100%',                    width: '100%',                }}            >                {images.map((image, i) => (                    <SwiperSlide className={`size-full rounded-lg`} key={i}>                        <img                            src={image.src}                            alt={image.alt}                            className={`size-full rounded-lg object-cover`}                        />                    </SwiperSlide>                ))}            </Swiper>        </div>    );};