import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = ({onApiResponse}) => {
  const [redirectUrl, setRedirectUrl] = useState("");
  const [submittedUrls, setSubmittedUrls] = useState(new Set());
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittedUrls.has(redirectUrl)) {
      alert("URL already submitted");
      return;
    }
    try {
      const response = await axios.post("/api/url", {
        url: redirectUrl,
      });
      setSubmittedUrls((prev) => prev.add(redirectUrl));
      onApiResponse(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e)=>{
    const newUrl = e.target.value;
    setRedirectUrl(newUrl);
  }
  return (
    <div>
      <h1>URL Shortner</h1>
      <form onSubmit={handleSubmit}>
        <div id="form-content">
          <input
            type="text"
            name="redirectUrl"
            id="redirectUrl"
            value={redirectUrl}
            onChange={handleChange}
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
