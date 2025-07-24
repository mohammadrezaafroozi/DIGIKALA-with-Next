"use client"
import React, { useState, useEffect } from "react";
import './pro.css' 
import ProductDetailFinal from "./ProductDetail_Final";
export default function Products({ slug, data }) {
  const [arrayData, setArrayData] = useState([]);
  const [state, setState] = useState();
  // console.log(slug);
useEffect(() => {
  if (data?.result) {
    // Convert the object into an array of values
    const dataArray = Object.values(data.result);
    setArrayData(dataArray);

    const foundItem = dataArray.flatMap(product => product.products)
      .find(val => val?.id == slug || val?.slug == slug);  

    if (foundItem) {
      setState(foundItem);
    }
  }
}, [data ,slug]);

return (

  <>
  
  <ProductDetailFinal state = {state}/>

  </>

);

}