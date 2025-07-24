// app/components/ProductSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

export default function ProductSlider({ products }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        480: { slidesPerView: 1 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="">
            <Link href={`/product/${product.id}`} className="">
              <div className="">
                <Image
                  src={product.images.main}
                  width={200}
                  height={200}
                  alt={product.title_fa}
                  className=""
                />
                {product.price?.discount_percent && (
                  <span className="  text-white font-bold mb-3 rounded p-1 bg-red-700">
                    %{product.price.discount_percent}
                  </span>
                )}
                <button className="">
                  
                </button>
              </div>
              <div className="p-2">
                <h3 className=" text-[14px]">{product.title_fa}</h3>
                <div className="">
                  {product.price?.rrp_price > product.price?.selling_price && (
                    <del className=" text-gray-500 text-xs">
                      {product.price.rrp_price.toLocaleString('fa-IR')}
                    </del>
                  )}
                  <span className=" text-xs font-bold">
                    {product.price?.selling_price.toLocaleString('fa-IR')} ریال
                  </span>
                </div>
                <div className="">
               
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}