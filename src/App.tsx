
import "./App.css"
import {Route, Routes} from "react-router";
import React from "react";
import Layout from "./layouts/Layout";
import HomePage from "./homePage/HomePage";
import Homework10Part2 from "./homeworks/homework10Part2/Homework10-part2";
import MainMenu from "./mainMenu/MainMenu";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout />} />
            <Route index element={<HomePage /> } />

            <Route path={'/'} element={ <MainMenu /> }/>
        </Routes>
    </div>
  )
}

export default App
