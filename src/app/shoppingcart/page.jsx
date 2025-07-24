"use client";
import React from "react";
import mystore from "./../store/mystore";
import Link from "next/link";
import Image from "next/image";

export default function BasketPage() {
  const { myData, removeFromBasket, increaseQuantity, decreaseQuantity, clearBasket } = mystore();

  // محاسبه جمع کل سبد خرید
  const totalPrice = myData.reduce(
    (sum, item) => sum + item.price.selling_price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
       
        <div className="bg-white text-black p-4">
          <h1 className="text-2xl font-bold text-center">سبد خرید شما</h1>
        </div>

    
        <div className="p-4">
          {myData.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">سبد خرید شما خالی است!</p>
              <Link href="/" className="text-blue-500 hover:underline mt-2 block">
                بازگشت به فروشگاه
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {myData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-200"
                >
                  <div className="flex items-center max-w-2xl  space-x-4 mb-4 md:mb-0">
                    <Image
                      src={item.images.main}
                      alt={item.title_fa}
                      width={100}
                      height={100}
                      className="w-16 h-16 object-contain  rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.title_fa}</h3>
                      <p className="text-gray-600">{item.price.selling_price.toLocaleString()} ریال</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
  
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromBasket(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {myData.length > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">جمع کل:</span>
              <span className="font-bold">{totalPrice.toLocaleString()} ریال</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={clearBasket}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                پاک کردن سبد
              </button>
              <Link href={'/Payment'} className="cursor-pointer">
              <button className="px-4 cursor-pointer py-2 bg-green-500 text-white rounded hover:bg-green-600 flex-1">
                پرداخت
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}