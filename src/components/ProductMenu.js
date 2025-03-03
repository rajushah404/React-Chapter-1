import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { NO_IMEGE } from "../utils/constants";
import "../css/ProductMenu.css";
import { useParams } from "react-router-dom";

const ProductMenu = () => {
  const [productInfo, setProductInfo] = useState(null);

  const {proId} = useParams();


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/"+proId);
    const json = await data.json();
    setProductInfo(json);
  };

  if (productInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <div className="image-zoom-wrapper">
          <img
            className="product-image"
            alt={productInfo.title}
            src={productInfo.image}
            onError={(e) => {
              e.target.src = NO_IMEGE;
            }}
          />
        </div>
      </div>
      <div className="product-info-container">
        <h1 className="product-title">{productInfo.title.toUpperCase()}</h1>
        <h2 className="product-category">{productInfo.category.toUpperCase()}</h2>
        <p className="product-description">{productInfo.description}</p>
        <p className="product-price">${productInfo.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductMenu;