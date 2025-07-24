'use client'
import { useState, useEffect } from 'react'
import { fetchHomeData } from "@/app/services/api"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from 'react-icons/fa'
import mystore from './../../store/mystore'

export default function Page() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { addtobasket } = mystore()

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchHomeData()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )

  if (error) return <p className="text-red-500 text-center py-10">خطا در دریافت اطلاعات: {error}</p>
  if (!data) return <p className="text-gray-500 text-center py-10">داده‌ای یافت نشد</p>

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-2xl font-bold text-gray-800 mb-6">
          {data.result.home_5.title}
        </h1>
        <Link className="text-base flex justify-center items-center gap-x-3 text-blue-500 mb-6" href='./../'>
          برگشت <FaArrowLeft/>  
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
        {data.result.home_5.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="relative cursor-pointer pt-[100%] bg-gray-50">
              <Image
                src={product.images.main}
                alt={product.title_fa}
                fill
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
                loading="lazy"
              />
            </div>

            <div className="p-3 flex-grow flex flex-col">
              <h3 className="text-sm text-gray-800 line-clamp-2 h-12 mb-2">
                {product.title_fa}
              </h3>

              <div className="mt-auto">
                {product.price.is_promotion && (
                  <div className="flex items-center mb-1">
                    <span className="text-sm text-gray-400 line-through ml-1">
                      {product.price.rrp_price.toLocaleString()}
                    </span>
                    <span className="bg-red-100 text-red-600 text-sm px-1 rounded">
                      {product.price.discount_percent}%
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-gray-800">
                      {product.price.selling_price.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 mr-1">ریال</span>
                  </div>
                </div>
              </div>

              {product.product_badge && (
                <div
                  className="text-xs mt-2 text-right"
                  style={{ color: product.product_badge.text_color }}
                >
                  {product.product_badge.text}
                </div>
              )}
            </div>

            <div className="px-3 pb-3">
              <button
                onClick={() => addtobasket(product)}
                className="w-full bg-rose-500 hover:bg-rose-600 cursor-pointer text-white py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}