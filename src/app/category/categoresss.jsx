"use client";
import Link from "next/link";

export default function categoresss() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <h2 className="lg:text-3xl text-xl font-bold text-gray-800 mb-8"> بر اساس سیلقه شما </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
  
        <Link 
          href="/components/home9"
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">مردانه</h3>
            <p className="text-gray-600">محصولات ویژه ساعت مردانه</p>
          </div>
        </Link>

        <Link 
          href="/components/home4" 
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="p-6 text-center">
            <div className="bg-pink-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">موبایل</h3>
            <p className="text-gray-600">محصولات ویژه موبایل</p>
          </div>
        </Link>

     
        <Link 
          href="/components/home8" 
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="p-6 text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2"> زنانه</h3>
            <p className="text-gray-600">محصولات ویژه کاور هدفون </p>
          </div>
        </Link>
      </div>
    </div>
  );
}