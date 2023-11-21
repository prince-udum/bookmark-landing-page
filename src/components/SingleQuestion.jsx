import React from "react";
import IconArrow from "../assets/icon-arrow.svg";

const SingleQuestion = ({ title, id, answer, activeId, toggleQuestion }) => {
  const isActive = activeId === id;
  return (
    <article className="question">
      <header onClick={() => toggleQuestion(id)}>
        <h5>{title}</h5>
        <button className={isActive ? "arrow arrowUp" : "arrow"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="#5267DF"
              stroke-width="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </button>
      </header>
      {isActive && <p>{answer}</p>}
    </article>
  );
};

export default SingleQuestion;
