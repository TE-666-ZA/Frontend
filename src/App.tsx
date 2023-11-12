import "./App.css";
import { Route, Routes } from "react-router";
import React from "react";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import BestCars from "./pages/BestCars";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path={"topCars"} element={<BestCars />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
