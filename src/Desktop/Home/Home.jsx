import React, { useEffect, useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const FetchData = async () => {
    try {
      console.log("Home Page Data Fetching...");
      setLoading(true);
      const response = await axios.get(`http://localhost:3/v2/home-ui`);
      const fetchedData = response.data.data;
      console.log(fetchedData[0].class);
      setData(fetchedData);
    } catch (err) {
      setError(true);
      console.log("Home Page UI Data not Fetched:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      {loading ? (
        <>
        <div className="home-page-loading">
  <h1>f</h1>
  </div>
        </>
      ) : error ? (
        <div>Error fetching data. Please try again later.</div>
      ) : data.length > 0 ? (
        <div className="home-body">
          <Link className={data[0]?.class}>{data[0]?.text}</Link>
          <span>{data[1]?.text}</span>
          <Link className={data[0]?.class}>{data[2]?.text}</Link>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </>
  );
}
