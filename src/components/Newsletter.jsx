import React, { useState, useRef } from "react";
import ErrorIcon from "../assets/icon-error.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const errorMsg = useRef();
  const errorIcon = useRef();
  const formRow = useRef();
  const emailRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if (!email.match(regx)) {
      errorMsg.current.style.display = "block";
      errorIcon.current.style.display = "block";
      formRow.current.style.backgroundColor = "#fa5757";
      emailRef.current.style.border = "3px solid var(--soft-red)";
      return;
    }
    errorMsg.current.style.display = "none";
    errorIcon.current.style.display = "none";
    formRow.current.style.backgroundColor = "none";
    emailRef.current.style.border = "none";
    setEmail("");
  }
  return (
    <section className="newsletter">
      <div className="container">
        <span>35,000+ already joined</span>
        <h4>Stay up-to-date with what we’re doing</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-row" ref={formRow}>
            <input
              type="text"
              placeholder="Enter your email address"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
            <img
              src={ErrorIcon}
              alt=""
              className="error-icon"
              ref={errorIcon}
            />
            <small className="error-msg" ref={errorMsg}>
              Whoops make sure it's an email
            </small>
          </div>

          <button type="submit" className="newsletter-btn btn">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
