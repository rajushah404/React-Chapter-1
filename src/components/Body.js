import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable.
  const [listOfRestros, setListOfRestros] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
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
