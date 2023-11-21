import React, { useState } from "react";
import { features } from "../data";
import FeaturesBtnsContainer from "./FeaturesBtnsContainer";
import FeaturesInfo from "./FeaturesInfo";

const Features = () => {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <section className="features-section">
      <div className="bg-img features-bg"></div>
      <div className="container">
        <div className="features-text">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div className="features">
          <FeaturesBtnsContainer
            features={features}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
          <FeaturesInfo features={features} currentItem={currentItem} />
        </div>
      </div>
    </section>
  );
};

export default Features;
