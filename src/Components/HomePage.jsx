import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "80%",
          margin: "auto",
          height: "200px",
          border: "1px solid red",
          marginTop: "200px",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={"/scatter"}>
          <h1>Scatter Chart</h1>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/bar"}>
          <h1>Bar Chart</h1>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
