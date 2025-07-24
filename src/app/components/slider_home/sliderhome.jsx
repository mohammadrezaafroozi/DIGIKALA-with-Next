"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import mystore from './../../store/mystore'
export default function Sliderhome() {
  return (
    <div className="relative mt-5 hidden md:flex w-full"> {/* ارتفاع تمام صفحه */}
      <Swiper
        spaceBetween={0} // فاصله بین اسلایدها را صفر کردیم
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="h-full w-full"
      >
        <SwiperSlide className="w-full">
          <Link href="/components/home6" className="block h-full  w-full">
            <Image
              src="/1.webp"
              fill // تصویر تمام فضای موجود را پر می‌کند
              alt="img1"
              quality={100}
              className="object-cover block h-full" // تصویر بدون تغییر نسبت ابعاد پر شود
              priority // برای لود سریعتر
            
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" w-full">
          <Link href="" className="block  w-full">
            <Image
              src="/3.webp"
              fill
              alt="img2"
              quality={100}
              className="object-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" w-full">
          <Link href="/components/home2" className="block w-full">

            <Image
              src="/3.gif"
              fill
              alt="img3"
              quality={100}
              className="object-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" w-full">
          <Link href="/components/home4" className="block w-full">

            <Image
              src="/44.webp"
              fill
              alt="img3"
              quality={100}
              className="object-cover"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}