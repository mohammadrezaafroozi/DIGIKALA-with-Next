"use client";
import { useState } from 'react';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
   
  const faqItems = [
    {
      question: "چگونه می‌توانم سفارشم را پیگیری کنم؟",
      answer: "پس از ثبت سفارش، می‌توانید از طریق بخش «پیگیری سفارش» در پنل کاربری یا با وارد کردن کد رهگیری در صفحه اصلی سایت، وضعیت سفارش خود را مشاهده کنید."
    },
    {
      question: "سیاست بازگشت کالا چگونه است؟",
      answer: "شما ۷ روز فرصت دارید تا در صورت عدم رضایت از کالا، آن را مرجوع کنید. کالا باید در شرایط اولیه و بدون استفاده باشد."
    },
    {
      question: "روش‌های پرداخت چه هستند؟",
      answer: "می‌توانید از طریق درگاه بانکی، کیف پول دیجی‌کالا، پرداخت در محل و یا اقساط خرید خود را انجام دهید."
    },
    {
      question: "زمان ارسال سفارشات چقدر است؟",
      answer: "در تهران ۲۴ ساعت و در سایر شهرها بین ۲ تا ۳ روز کاری زمان می‌برد. امکان ارسال فوری برای برخی محصولات وجود دارد."
    },
    {
      question: "چگونه حساب کاربری ایجاد کنم؟",
      answer: "با وارد کردن شماره موبایل و دریافت کد تأیید می‌توانید در کمتر از ۱ دقیقه حساب کاربری ایجاد کنید."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">سوالات متداول</h1>
          <p className="text-lg text-gray-600">پاسخ به پرسش‌های پرتکرار شما</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-right focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-lg font-medium text-gray-900">{item.question}</h2>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`px-6 pb-6 pt-0 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">پرسش شما را پیدا نکردید؟</h2>
          <p className="text-gray-600 mb-4">می‌توانید از طریق راه‌های زیر با ما در تماس باشید:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-center transition-colors"
            >
              تماس با پشتیبانی
            </a>
            <a
              href="tel:02191012990"
              className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 px-6 rounded-lg text-center transition-colors"
            >
              تماس تلفنی
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}