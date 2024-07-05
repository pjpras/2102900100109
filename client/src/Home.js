import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const Home = () => {
  const [apiRes, setApiRes] = useState();

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

  return (
      <>
        <Form />
    </>
  );
};

export default Home;
