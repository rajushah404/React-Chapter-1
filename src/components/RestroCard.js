const RestroCard = (props) => {
    const { resData } = props;
    const { image, name, aggregateRating, address } = resData?.item;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="res-logo" src={image} alt="logo" />
        <h3>{name}</h3>
        <h4>Rating: {aggregateRating.ratingValue} ⭐</h4>
        <h4>Reviews: {aggregateRating.reviewCount}</h4>
        <h4>Address: {address.streetAddress}</h4>
      </div>
    );
  };

  export default RestroCard;