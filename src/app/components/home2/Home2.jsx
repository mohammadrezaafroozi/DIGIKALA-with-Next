import { FaArrowLeft } from 'react-icons/fa';
import { fetchHomeData } from "@/app/services/api";
import ProductSlider from "./ProductSlider";
import Link from "next/link";

export default async function HomePage() {
  const data = await fetchHomeData();

  if (!data) return <p>خطا در دریافت اطلاعات</p>;

  return (
    <main className="p-4 ">

      <div className="flex justify-between mb-3 md:p-4  items-center">
        <div><h1 className=" font-bold text-sm lg:text-2xl text-red-700 text-center ">
        {data.result.trending.title}
        </h1></div>
        <div>
          <Link className="text-blue-800 flex text-sm md:text-base justify-center items-center gap-x-3  p-1" href='components/home2'> 
          <FaArrowLeft/> مشاهده همه 
        </Link>
        </div>
      </div>

      <ProductSlider products={data.result.trending.products} />
    </main>
  );
}