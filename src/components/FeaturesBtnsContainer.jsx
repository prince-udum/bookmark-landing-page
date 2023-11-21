import React from "react";

const FeaturesBtnsContainer = ({ features, currentItem, setCurrentItem }) => {
  return (
    <div className="features-btn">
      {features.map((btn, index) => {
        const { id, shortTitle } = btn;
        return (
          <button
            key={id}
            onClick={() => setCurrentItem(index)}
            className={currentItem === index ? "active-btn" : "null"}
          >
            {shortTitle}
          </button>
        );
      })}
    </div>
  );
};

export default FeaturesBtnsContainer;
