"use client";
import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegramPlane, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import "./../../globals.css";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id='foot' className="bg-[#EF3F3E] text-white">
      {/* بخش بالایی فوتر */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* بخش خدمات مشتریان */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b pb-2 border-gray-500">خدمات مشتریان</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-200 transition">پاسخ به پرسش‌های متداول</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">رویه بازگرداندن کالا</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">شرایط استفاده</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">حریم خصوصی</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">گزارش باگ</Link></li>
            </ul>
          </div>

          {/* بخش راهنمای خرید */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b pb-2 border-gray-500">راهنمای خرید</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-200 transition">نحوه ثبت سفارش</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">رویه ارسال سفارش</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">شیوه‌های پرداخت</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">پرسش‌های متداول</Link></li>
            </ul>
          </div>

          {/* بخش تماس با ما */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b pb-2 border-gray-500">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <span>ایمیل: mrafroozi2001@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <span>تلفن: 09367971379 </span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>آدرس:تهران، میدان صادقیه، خ سازمان آب، مجتمع آموزشی پرنیان (خرد)  </span>
              </li>
            </ul>
          </div>

          {/* بخش همراه ما باشید */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b pb-2 border-gray-500">همراه ما باشید</h3>
            <div className="flex gap-4">
              <Link href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
                <FaTelegramPlane size={20} />
              </Link>
              <Link href="https://www.instagram.com/afroozi_dev?igsh=MWNvODk2dGwwY29o" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition">
                <FaInstagram size={20} />
              </Link>
              
              <Link href="https://www.linkedin.com/in/afroozidev/" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition">
                <FaLinkedin size={20} />
              </Link>

              <Link href="https://github.com/mohammadrezaafroozi" className="bg-black p-2 rounded-full hover:bg-white transition">
                < FaGithub size={20} />
              </Link>

              
            </div>

            {/* لوگوهای اطمینان */}
            <div className="pt-4">
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EF3F3E] py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>
            فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
          </p>
          <p className="mt-2">
            دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل کلیدی، پرداخت در محل، تحویل اکسپرس و ضمانت بازگشت کالا، موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود.
          </p>
          <p className="mt-4 text-gray-400">
            © 1404 - کلیه حقوق برای دیجی‌کالا محفوظ است.
          </p>
          <p className="mt-4 text-gray-400" >منتور:پارسا قربانیان</p>
          
          <div className="flex items-center justify-center ">
            <Image
              src="/prof.jpg"
              alt="myphoto"
              width={100}
              height={100}
              className="rounded-full border"
            />
            
          </div>
          <p className="mt-4 text-gray-400">
            توسعه یافته توسط محمدرضا افروزی
          </p>
          


        </div>
      </div>
    </footer>
  );
}