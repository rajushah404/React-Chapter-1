import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        {/* <div>{<Search />}</div> */}
        <div className="filter">
          <button className="filter-btn">
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {resList.map((res) => (
            <RestroCard key={res.position} resData={res} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;