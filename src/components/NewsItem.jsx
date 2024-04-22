import React, { useState } from "react";
import PropTypes from "prop-types";
import LoadingBar from 'react-top-loading-bar';

const NewsItem = ({ title, description, ImageUrl, newId }) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    // Simulate loading delay, replace this with your actual loading logic
    setTimeout(() => {
      setLoading(false);
      // Add logic to navigate to the news URL here
      window.open(newId, "_blank");
    }, 1000); // Simulated delay of 1 second
  };

  return (
    <div>
      <LoadingBar
        progress={loading ? 30 : 0} // Adjust the progress value as needed
        color="#3f0505" // Adjust the color as needed
        height={10} // Adjust the height as needed
      />
      <div className="container my-4">
        <div className="card">
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <button onClick={handleButtonClick} className="btn btn-dark">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  newId: PropTypes.string.isRequired,
};

export default NewsItem;
