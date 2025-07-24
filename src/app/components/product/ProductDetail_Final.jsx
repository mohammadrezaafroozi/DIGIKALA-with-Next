'use client'
import mystore from './../../store/mystore'
import Link from "next/link"
import Image from 'next/image'
export default function ProductDetailFinal({ state }) {
  if (!state?.id) return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-24 h-24">
        <svg className="animate-spin w-full h-full text-blue-500" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
        </svg>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">لطفا صبر کنید...</span>
      </div>
    </div>
  )
  const breadcrumbItems = [
    'دیجی‌کالا',
    state.category_title || 'دسته‌بندی',
    state.title_fa || 'محصول'
  ]

  const specs = [
    { name: 'شناسه کالا', value: state.id },
    { name: 'رنگ‌بندی', value: state.parameters?.color_ids?.join('، ') || 'نامشخص' },
    { name: 'وضعیت محصول', value: state.status === 'marketable' ? 'موجود در انبار' : 'نا موجود' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Breadcrumb و دکمه‌های برگشت */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex justify-between items-center gap-4">
          <Link href={'/'} className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
            <span className="hidden sm:inline">برگشت به صفحه اصلی</span>
            <span className="sm:hidden">برگشت</span>
          </Link>
          <Link href={'/shoppingcart'} className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
            سبد خرید
          </Link>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row gap-6">

        <div className="lg:w-1/2">
          <ProductGallery
            mainImage={state.images?.main}
            alt={state.title_fa}
          />
        </div>


        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h1 className="md:text-2xl sm:text-base font-bold text-gray-800 mb-2">{state.title_fa}</h1>

            {state.brand?.title_fa && (
              <div className="mb-3">
                <span className="text-gray-500">برند: </span>
                <span className="text-gray-700 font-medium">{state.brand.title_fa}</span>
              </div>
            )}

            <Rating rate={state.rating?.rate} count={state.rating?.count} />

            <Price
              sellingPrice={state.price?.selling_price}
              rrpPrice={state.price?.rrp_price}
            />

            <ActionButtons state={state} />

            {state.digiplus?.services && (
              <DigiplusBenefits services={state.digiplus.services} />
            )}

            {state.product_badges && (
              <ProductBadges badges={state.product_badges} />
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm p-4">
        <Specifications specs={specs} />
      </div>
    </div>
  )
}

function Breadcrumb({ items }) {
  return (
    <div className="flex items-center text-sm text-gray-600 flex-wrap gap-1">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-1">›</span>}
          <span className={index === items.length - 1 ? "font-bold text-gray-800" : ""}>
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

function ProductGallery({ mainImage, alt }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-center">
        <Image 
          src={mainImage} 
          alt={alt} 
          width={100}
          height={100}
          className="max-h-80 object-contain"
          onError={(e) => {
            e.target.src = '/placeholder-product.png'
          }}
        />
      </div>
    </div>
  )
}

function Rating({ rate, count }) {
  const filledStars = Math.floor(rate / 20)
  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${i < filledStars ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  }

  return (
    <div className="flex items-center gap-1 mb-3">
      <div className="flex">
        {stars}
      </div>
      <span className="text-sm cursor-pointer text-gray-500 mr-1">({count} نظر)</span>
    </div>
  )
}

function Price({ sellingPrice, rrpPrice }) {
  const toPersianNumber = (num) => {
    return new Intl.NumberFormat('fa-IR').format(num)
  }

  const formatPrice = (price) => {
    return `${toPersianNumber(price)} ریال`
  }

  const hasDiscount = rrpPrice > sellingPrice
  const discountPercentage = hasDiscount
    ? Math.round((rrpPrice - sellingPrice) / rrpPrice * 100)
    : 0

  return (
    <div className="flex items-center gap-3 mb-4">
      {hasDiscount && (
        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
          %{toPersianNumber(discountPercentage)} تخفیف
        </span>
      )}
      <div className="flex flex-col">
        {hasDiscount && (
          <span className="text-gray-400 text-sm line-through">
            {formatPrice(rrpPrice)}
          </span>
        )}
        <span className="text-red-600 font-bold text-xl">
          {formatPrice(sellingPrice)}
        </span>
      </div>
    </div>
  )
}

function ActionButtons({ state }) {
  const { addtobasket } = mystore()



  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <button 
        onClick={() => addtobasket(state)}
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-3 px-6 rounded-lg font-medium transition-colors flex-1"
      >
        افزودن به سبد خرید
      </button>

      <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors flex-1">
        اشتراک گذاری
      </button>
    </div>
  )
}

function DigiplusBenefits({ services }) {
  return (
    <div className="border-t border-gray-200 pt-4 mb-4">
      <h3 className="font-bold text-gray-800 mb-2">خدمات دیجی‌پلاس</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProductBadges({ badges }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="border rounded-full px-3 py-1 text-xs"
          style={{ 
            color: badge.payload?.text_color || '#62666d',
            borderColor: badge.payload?.text_color || '#e0e0e0'
          }}
        >
          {badge.payload?.text || 'نشان محصول'}
        </div>
      ))}
    </div>
  )
}

function Specifications({ specs }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-4">مشخصات فنی</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex border-b border-gray-100 pb-3">
            <div className="w-1/3 text-gray-500">{spec.name}</div>
            <div className="w-2/3 text-gray-800 font-medium">{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}