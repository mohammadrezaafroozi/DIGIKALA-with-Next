
// app/components/ProductSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css'
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductSlider9({ products }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {products.map((product) => (
        <SwiperSlide className=' flex justify-center items-center flex-wrap' key={product.id}>
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.images.main}
              width={100}
              height={50}
              alt={product.title_fa}
            />
            <p className="text-xl p-4">{product.title_fa}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}