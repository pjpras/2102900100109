import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const Home = () => {
  const [apiRes, setApiRes] = useState();
  const [shortId, setShortId] = useState();

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.get(`/api/url/analytics/nAGGEqMD`);
        setApiRes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, []);

  useEffect(() => {
    if (apiRes !== undefined) {
      // Check to avoid logging undefined on initial render
      console.log(apiRes); // Log state after it has been updated
    }
  }, [apiRes]);

  const handleApiResponse = async (shortId) => {
    setShortId(shortId);
  };
  return (
    <>
      <Form onApiResponse={handleApiResponse} />
      {shortId && (
        <div>
          <h2 style={{ color: "white", marginLeft: "5rem", marginTop: "5rem" }}>
            Short Link:
          </h2>
          <a
            href={`http://localhost:8001/${shortId}`}
            style={{ color: "white", marginLeft: "5rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >{`http://localhost:8001/${shortId}`}</a>
        </div>
      )}
    </>
  );
};

export default Home;
