const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {[...Array(25)].map((_, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  