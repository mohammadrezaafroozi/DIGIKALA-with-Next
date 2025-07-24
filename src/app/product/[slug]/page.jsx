import Prouductss from "@/app/components/product/Prouductss";
import { fetchHomeData } from "@/app/services/api";

export default async function ProductDetails({ params }) {
  const { slug } = params;
  const data = await fetchHomeData();
  

  return (
    <div className="product-detail space-y-4">
   <Prouductss slug={slug} data={data}/>
    </div>
  );
}