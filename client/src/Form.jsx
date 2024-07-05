import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <h1>URL Shortner</h1>
      <form method="POST" id="form">
        <div id="form-content">
          <input
            type="text"
            name="redirectUrl"
            id="redirectUrl"
            placeholder="Place your long URL here..."
          />
          <button type="submit" name="redirectUrl" id="generate">
            Shortner link
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
