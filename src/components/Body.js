import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variables
  const [listOfRestros, setListOfRestros] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();

    setListOfRestros(json);
  };

  // Filter top-rated restaurants
  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestros.filter((res) => res.rating.rate > 4);
    setListOfRestros(filteredList);
  };

  return listOfRestros.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestros.map((res) => (
          <RestroCard key={res.id} productData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
