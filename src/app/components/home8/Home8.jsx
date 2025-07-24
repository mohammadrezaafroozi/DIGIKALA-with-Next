import { FaArrowLeft } from 'react-icons/fa';
import { fetchHomeData } from "@/app/services/api";
import ProductSlider from "./ProductSlider";
import Link from "next/link";

export default async function HomePage() {
  const data = await fetchHomeData();

  if (!data) return <p>خطا در دریافت اطلاعات</p>;

  return (
    <section className="p-4 bg-[#700240]">

      <div className="flex justify-between mb-3 md:p-4  items-center">
        <div><h1 className=" font-bold text-sm lg:text-2xl text-white text-center ">
        {data.result.home_6.title}
        </h1></div>
        <div>
          <Link className="text-white flex text-sm md:text-base justify-center items-center gap-x-3 p-1" href='components/home8'> 
          <FaArrowLeft/> مشاهده همه 
        </Link>
        </div>
      </div>

      <ProductSlider products={data.result.home_6.products} />
    </section>
  );
}