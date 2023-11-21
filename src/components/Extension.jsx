import React from "react";
import { extensions } from "../data";

const Extension = () => {
  return (
    <section className="extension-section">
      <div className="container">
        <div className="extension-text">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        <ul className="extension">
          {extensions.map((item, index) => {
            const { id, logo, title, version, btnText, dots } = item;
            return (
              <li
                key={id}
                className={
                  index === 0
                    ? "null"
                    : index === 1
                    ? "second-extension"
                    : "third-extension"
                }
              >
                <img src={logo} alt="Chrome" className="extensions-logo" />
                <h4>{title}</h4>
                <p>{version}</p>
                <img src={dots} className="dots" />
                <button className="extension-btn">{btnText}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Extension;
