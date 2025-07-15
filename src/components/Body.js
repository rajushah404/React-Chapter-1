import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfProduct from "../utils/useListOfProduct";

const Body = () => {
  // State variables
  const [searchText, setSearchText] = useState("");

  const { listOfProduct, filteredList, setFilteredList } = useListOfProduct();

  // Filter top-rated products
  const filterTopRatedProduct = () => {
    const filteredList = listOfProduct.filter((res) => res.rating.rate > 4);
    setFilteredList(filteredList);
  };

  // Search and filter products
  const searchProductFilter = (text) => {
    setSearchText(text); 
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like ypu are offline</h1>;

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
