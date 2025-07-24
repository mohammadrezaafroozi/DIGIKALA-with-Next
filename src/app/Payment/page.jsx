'use client';
import { useState, useEffect } from 'react';
export default function PaymentPage() {
  const [countdown, setCountdown] = useState(5);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    setIsRedirecting(true);
    window.location.href = './';
  };

  return (
    <div className="flex items-center mt-10 justify-center min-h-auto p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
        {/* انیمیشن لودینگ */}
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">در حال انتقال به درگاه پرداخت</h2>
        <p className="text-gray-600 mb-6">لطفاً صبر کنید...</p>
        
        {/* تایمر معکوس */}
        <div className="text-3xl font-bold text-red-500 my-4">{countdown}</div>
        
        {/* جزئیات پرداخت */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-right">
          <p className="mb-2">
            مبلغ: <span className="font-bold">****</span>
          </p>
          <p>
            شماره سفارش: <span className="font-bold">۱۲۳۴۵۶****</span>
          </p>
        </div>

        {/* دکمه پرداخت دستی */}
        <button
          onClick={handleRedirect}
          disabled={isRedirecting}
          className={`w-full py-3 px-6 rounded-lg font-medium ${
            isRedirecting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition-colors`}
        >
          {isRedirecting ? 'در حال انتقال...' : 'پرداخت دستی'}
        </button>

        {/* نکات مهم */}
        <p className="text-sm text-gray-500 mt-6">
          پس از انتقال، اطلاعات کارت بانکی خود را وارد نمایید.
        </p>
      </div>
    </div>
  );
}