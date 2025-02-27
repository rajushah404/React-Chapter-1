import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variables
  const [listOfProduct, setlistOfProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setlistOfProduct(json);
    setFilteredList(json);
  };

  // Filter top-rated restaurants
  const filterTopRatedProduct = () => {
    const filteredList = listOfProduct.filter((res) => res.rating.rate > 4);
    setFilteredList(filteredList);
  };

  const searchProductFilter = () => {
    const searchproduct = listOfProduct.filter((pro) =>
      pro.title.toLowerCase().includes(searchText.toLowerCase()) || 
    pro.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(searchproduct);
  };

  return listOfProduct.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search product ..."
          id="productname"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={searchProductFilter}>
          Search
        </button>

        <button className="filter-btn" onClick={filterTopRatedProduct}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((res) => (
          <RestroCard key={res.id} productData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
