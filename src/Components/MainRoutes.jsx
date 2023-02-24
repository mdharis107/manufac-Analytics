import React from "react";
import { Route, Routes } from "react-router-dom";
import BarChart from "./BarChart";
import HomePage from "./HomePage";
import ScatterChart from "./ScatterChart";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scatter" element={<ScatterChart />} />
        <Route path="/bar" element={<BarChart />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
