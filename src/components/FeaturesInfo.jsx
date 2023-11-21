import React from "react";

const FeaturesInfo = ({ features, currentItem }) => {
  const { img, id, longTitle, text } = features[currentItem];
  return (
    <div className="features-info">
      <img src={img} alt={longTitle} />
      <div>
        <h3>{longTitle}</h3>
        <p>{text}</p>
        <button className="btn">More Info</button>
      </div>
    </div>
  );
};

export default FeaturesInfo;
