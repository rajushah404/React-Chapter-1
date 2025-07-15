import { useEffect, useState } from "react";

const useListOfProduct = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setListOfProduct(json);
    setFilteredList(json);
  };

  return { listOfProduct, filteredList, setFilteredList };
};

export default useListOfProduct;
