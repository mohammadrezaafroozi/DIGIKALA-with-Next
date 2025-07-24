"use client";
import { FaChevronLeft, FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function GuidePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const controlsTimeout = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    resetControlsTimer();
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    resetControlsTimer();
  };

  const handleTimeUpdate = () => {
    const duration = videoRef.current.duration || 1;
    setProgress((videoRef.current.currentTime / duration) * 100);
  };

  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
    resetControlsTimer();
  };

  const resetControlsTimer = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => setShowControls(false), 3000);
  };

  useEffect(() => {
    return () => clearTimeout(controlsTimeout.current);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* هدر صفحه */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-4">
          <h1 className="text-lg font-bold text-gray-800">راهنمای خرید  </h1>
          <Link href="/" className="text-red-500 hover:text-red-700">
            <FaChevronLeft size={18} />
          </Link>
        </div>
      </div>

      {/* بخش ویدیو با کنترل‌های پیشرفته */}
      <div className="container mx-auto px-4 mt-6">
        <div 
          className="relative rounded-lg overflow-hidden bg-black"
          onMouseMove={resetControlsTimer}
          onMouseLeave={() => setTimeout(() => setShowControls(false), 2000)}
        >
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            className="w-full h-auto max-h-[500px] object-cover cursor-pointer"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source 
              src="https://digikala.arvanvod.ir/kGp7mgrY8V/opO127Z9Pq/origin_hdKaBzUDjdi22oHvZBkth8hL6AM8lGgUxL5KtWrO.mp4" 
              type="video/mp4" 
            />
          </video>

          {/* کنترل‌های ویدیو */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* نوار پیشرفت */}
            <div 
              className="h-1.5 w-full bg-gray-600 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-red-500" 
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* دکمه‌های کنترل */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={togglePlay}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
                </button>
                <button 
                  onClick={toggleMute}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
                </button>
                <span className="text-white text-sm">
                  {Math.floor(videoRef.current?.currentTime || 0)} / {Math.floor(videoRef.current?.duration || 0)} ثانیه
                </span>
              </div>
              <button className="text-white hover:text-red-400 transition-colors">
                <FaExpand size={18} />
              </button>
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 p-6">
            <h2 className="text-blue-500 text-xl md:text-2xl font-bold drop-shadow-lg">
              تجربه خریدی آسان و مطمئن
            </h2>
          </div>
        </div>
      </div>

    
      <div className="">
      <div className="container mx-auto px-4 mt-8 bg-white rounded-lg shadow-sm p-6">
  <div className="grid gap-8 md:grid-cols-2">
    

    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span className="bg-red-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center">1</span>
          ثبت سفارش آسان
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          فقط در ۳ مرحله ساده می‌توانید سفارش خود را ثبت کنید:
          انتخاب کالا، پرداخت امن و تأیید نهایی.
          تمام مراحل کمتر از ۲ دقیقه زمان می‌برد!
        </p>
      </div>

      <div className="border-b pb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span className="bg-blue-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center">2</span>
          تحویل سریع و مطمئن
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          سفارشات تهران در همان روز و سایر شهرها حداکثر ظرف ۷۲ ساعت تحویل داده می‌شوند.
          امکان رهگیری لحظه‌به‌لحظه از طریق پیامک.
        </p>
      </div>
    </div>

    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span className="bg-green-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center">3</span>
          گارانتی و بازگشت کالا
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          تمام محصولات دارای ۱۸ ماه گارانتی اصالت هستند.
          امکان بازگرداندن کالا تا ۷ روز پس از تحویل بدون نیاز به دلیل.
        </p>
      </div>

      <div className="border-b pb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span className="bg-purple-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center">4</span>
          پشتیبانی ۲۴ ساعته
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات شماست.
          از طریق چت آنلاین، تلفن و ایمیل با ما در ارتباط باشید.
        </p>
      </div>
    </div>

  </div>
</div>
      </div>
    </div>
  );
}