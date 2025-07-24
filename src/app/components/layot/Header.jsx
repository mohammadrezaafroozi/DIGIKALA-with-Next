"use client";
import { FaBars, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import React, { useState, } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mystore from './../../store/mystore'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);


  return (
    <header id='head' className={`bg-white rounded *:p-2 *:md:p-0 sticky top-0 z-[999] ${isScrolled ? 'shadow-md' : ''}`}>
      <Hedmain />
      <Hedbottem />
    </header>
  );
}

function Hedmain() {
  const { getTotalItems } = mystore();
  const totalItems = getTotalItems();

  return (
    <div className='w-full  border-b'>
      <div className='container mx-auto   flex relative md:p-4 justify-between items-center '>

        <div className='p-2'>

          <Link href='/' className='flex-shrink-0'>
            <Image src={'Logo.svg'} alt='logo' width={100} height={40} className='w-auto h-6 md:h-6' />
          </Link>
        </div>

        <Link href="/shoppingcart" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

function Hedbottem() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='relative border-b '>
      <div className='container mx-auto md:py-0  md:px-4'>
        <div>

        </div>
        <div className='flex justify-between items-center gap-4'>
          
          <div className=''>
            <div className="">

              <div
                className="flex items-center gap-2 p-2 cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              >
                <FaBars className="text-lg" />
                <span className="font-medium text-sm md:text-base">دسته بندی کالاها</span>
              </div>

              {isMenuOpen && (
                <div className="fixed inset-0 z-50  bg-opacity-50 flex">
                  <div className="bg-white w-4/5 lg:w-1/5 h-full p-4">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold">دسته‌بندی‌ها</h3>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 rounded-full text-gray-500"
                      >
                        <FaTimes className="text-xl text-black cursor-pointer" />
                      </button>
                    </div>

                    {/* لیست منو */}
                    <nav className="space-y-3">
                      <Link href="/components/home4" className="block p-2 hover:bg-gray-100 rounded">گوشی موبایل</Link>
                      <Link href="/components/home3" className="block p-2 hover:bg-gray-100 rounded">کاور گوشی</Link>
                      <Link href="/components/home5" className="block p-2 hover:bg-gray-100 rounded"> کاور تبلت</Link>
                      <Link href="/components/home6" className="block p-2 hover:bg-gray-100 rounded"> هدفون </Link>
                      <Link href="/components/home9" className="block p-2 hover:bg-gray-100 rounded"> ساعت مردانه  </Link>
                      <Link href="/components/home10" className="block p-2 hover:bg-gray-100 rounded"> ساعت هوشمند  </Link>
                      <Link href="/components/home2" className="block p-2 hover:bg-gray-100 rounded">  داغ ترین ها   </Link>
                      <Link href="/components/home" className="block p-2 hover:bg-gray-100 rounded">    تخفیف ها   </Link>
                      <Link href="/components/home7" className="block p-2 hover:bg-gray-100 rounded">     بند ساعت   </Link>
                    </nav>
                    <div>
                      <ul className=" p-2 lg:hidden  border-t text-sm font-bold items-center  ">
                        <li className="group    py-2">
                          <Link href="/" className="text-gray-700 font-bold  text-balance hover:text-red-500 transition-colors">
                            خانه
                          </Link>

                        </li>
                        <li className="group relative py-2 ">
                          <Link href="/FAQ" className="text-gray-700 font-bold  text-balance hover:text-red-500 transition-colors">
                            سوالی دارید؟
                          </Link>
                        </li>
                        <li className="group relative py-2 ">
                          <Link href="/about" className="text-gray-700 font-bold  text-balance hover:text-red-500 transition-colors">
                            درباره ما
                          </Link>

                        </li>
                        <li className="group relative py-2">
                          <Link href="/help" className="text-gray-700 font-bold  text-balance hover:text-red-500 transition-colors">
                            راهنمای خرید و پرداخت
                          </Link>

                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="w-1/5 h-full"
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            <ul className="lg:flex hidden p-2 gap-x-20 font-bold items-center gap-1 text-base ">
              <li className="group relative  ">
                <Link href="/" className="text-gray-700 font-bold  text-balance hover:text-red-500 transition-colors">
                  خانه
                </Link>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-red-500 transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </li>
              <li className="group relative  ">
                <Link href="/FAQ" className="text-gray-700 font-bold  text-balance hover:text-red-500 transition-colors">
                  سوالی دارید؟
                </Link>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-red-500 transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </li>
              <li className="group relative  ">
                <Link href="/about" className="text-gray-700 font-bold  text-balance hover:text-red-500 transition-colors">
                  درباره ما
                </Link>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-red-500 transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </li>
              <li className="group relative  ">
                <Link href="/help" className="text-gray-700 font-bold  text-balance hover:text-red-500 transition-colors">
                  راهنمای خرید و پرداخت
                </Link>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-red-500 transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </li>
            </ul>
          </div>

          <div className="flex items-center p-2 gap-1 text-xs md:text-sm text-gray-700">
            <FaMapMarkerAlt className="text-red-500 text-sm" />
            <span>تهران</span>
          </div>

        </div>
      </div>

    </div>
  );
}

