import { useEffect, useState } from "react";

const useProductMenu = (proId) => {
  const [productInfo, setproductInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/" + proId);
    const json = await data.json();
    setproductInfo(json);
  };

  return productInfo;
};

export default useProductMenu;
