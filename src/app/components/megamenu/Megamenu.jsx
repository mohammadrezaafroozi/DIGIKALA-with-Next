
// import React from 'react';
// import { fetchHomeData } from "@/app/services/api";
// import Link from 'next/link';

// export default async function Megamenu() {
//     const { categories } = await fetchHomeData(); // فرض می‌کنیم داده‌ها به این شکل هستند:
//     // categories: { id: number, title: string, children: [...], slug: string }[]

//     return (
//         <div className="absolute right-0 left-0 top-full bg-white shadow-lg z-50 p-5 rounded-b-lg">
//             <div className="container mx-auto grid grid-cols-4 gap-8">
//                 {categories&&categories.result.map((category) => (
//                     <div key={category.id} className="border-l border-gray-100 pl-4">
                      
//                         <h3 className="text-gray-800 font-bold mb-3 hover:text-red-500 transition-colors">
//                             <Link href={'#'}>
//                                 {category.title}
//                             </Link>
//                         </h3>
                        
//                         {/* زیردسته‌ها (چیلدرن) */}
//                         <ul className="space-y-2">
//                             {category.children.map((child) => (
//                                 <li key={child.id}>
//                                     <Link 
//                                         href={'#'}
//                                         className="text-gray-600 text-sm hover:text-red-500 transition-colors"
//                                     >
//                                         {child.title}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
