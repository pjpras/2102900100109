import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const Home = () => {
  const [analyticsRes, setAnalyticsRes] = useState();
  const [shortId, setShortId] = useState();

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.get(`/api/url/analytics/${shortId}`);
        setAnalyticsRes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (shortId !== undefined) fetchApi();
  }, [shortId]);

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
      {analyticsRes && (
        <div style={{ background: "rgb(195 95 21)" }}>
          <h2
            style={{ color: "#031f39", marginLeft: "5rem", marginTop: "5rem" }}
          >
            Analytics:
          </h2>
          <p style={{ color: "#031f39", marginLeft: "5rem" }}>
            Total Clicks: {analyticsRes["Total Clicks"]}
          </p>
          <pre style={{ color: "#031f39", marginLeft: "5rem" }}>
            Timestamps:
            {JSON.stringify(analyticsRes.Analytics, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
};

export default Home;
