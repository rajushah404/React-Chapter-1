import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // Local State Variable.
  const [listOfRestros, setListOfRestros] = useState(resList);
  const [searchQuery, setSearchQuery] = useState("");

  // const filterSearchRestro = () => {
  //   const searchList = resList.filter((res) =>
  //     res.item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setListOfRestros(searchList);
  // };

  useEffect(() => {
    const searchList = resList.filter((res) =>
      res.item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setListOfRestros(searchList);
  }, [searchQuery]);

  return (
    <div className="body">
      <div className="filter">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search for restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <button className="filter-btn" onClick={filterSearchRestro}>
          Search
        </button> */}
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            filteredList = listOfRestros.filter(
              (res) => res.item.aggregateRating.ratingValue > 4
            );
            setListOfRestros(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestros.map((res) => (
          <RestroCard key={res.position} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
