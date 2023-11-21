import React, { useState } from "react";
import { questions } from "../data";
import SingleQuestion from "./SingleQuestion";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section className="FAQ">
      <div>
        <h3>Frequently Asked Questions</h3>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="questions">
        {questions.map((question) => {
          return (
            <SingleQuestion
              {...question}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
              key={question.id}
            />
          );
        })}
      </div>

      <button className="btn">More Info</button>
    </section>
  );
};

export default FAQ;
