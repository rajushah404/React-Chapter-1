import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";

const Body = () => {
  // State variables
  const [listOfProduct, setListOfProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setListOfProduct(json);
    setFilteredList(json);
  };

  // Filter top-rated products
  const filterTopRatedProduct = () => {
    const filteredList = listOfProduct.filter((res) => res.rating.rate > 4);
    setFilteredList(filteredList);
  };

  // Search and filter products
  const searchProductFilter = (text) => {
    setSearchText(text); // Update the searchText state
    if (text.length >= 3) {
      const searchProduct = listOfProduct.filter(
        (pro) =>
          pro.title.toLowerCase().includes(text.toLowerCase()) ||
          pro.category.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredList(searchProduct);
    } else {
      setFilteredList(listOfProduct);
    }
  };

  if (listOfProduct.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search product ..."
          id="productname"
          value={searchText}
          onChange={(e) => searchProductFilter(e.target.value)}
        />
        <button className="filter-btn" onClick={filterTopRatedProduct}>
          Top Rated Products
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((res) => (
          <NavLink
            style={{ textDecoration: "none" }}
            key={res.id}
            to={"/products/" + res.id}
          >
            <RestroCard key={res.id} productData={res} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
