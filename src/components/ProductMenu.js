import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Error from "./Error";

const ProductMenu = () => {
  const [productInfo, setProductInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/1");
    const json = await data.json();
    setProductInfo(json);
    console.log(json);
  };
  return productInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{productInfo.title}</h1>
      <h2>{productInfo.category}</h2>
      <h3>{productInfo.description}</h3>
      <img
        className="res-logo"
        alt={productInfo.title}
        src={productInfo.image}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
        onError={(e) => {
          e.target.src = { NO_IMEGE };
        }}
      />

    </div>
  );
};

export default ProductMenu;
