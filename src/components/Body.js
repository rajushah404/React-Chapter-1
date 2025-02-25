import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";

const Body = () => {
  // State variables
  const [listOfRestros, setListOfRestros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json();

      console.log("API Response:", json);
      setListOfRestros(json || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter top-rated restaurants
  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestros.filter((res) => res.rating.rate > 4);
    setListOfRestros(filteredList);
  };
  // Show error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestros.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          listOfRestros.map((res) => (
            <RestroCard key={res.id} productData={res} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;