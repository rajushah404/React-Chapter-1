import { NO_IMEGE } from "../utils/constants";

const RestroCard = ({ productData }) => {
  const { image, title, price, category, rating } = productData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={title}
        src={image}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
        onError={(e) => {
          e.target.src = { NO_IMEGE };
        }}
      />
      <h3>{title}</h3>
      <h4>Category: {category}</h4>
      <h4>Price: ${price}</h4>
      <h4>
        Rating: {rating.rate} ⭐ ({rating.count} reviews)
      </h4>
    </div>
  );
};

export default RestroCard;
