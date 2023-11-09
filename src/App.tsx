
import "./App.css"
import {Route, Routes} from "react-router";
import React from "react";
import Layout from "./layouts/Layout";
import HomePage from "./homePage/HomePage";
import HeaderNavbar from "./mainMenu/headerNavbar";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout />} />
            <Route index element={<HomePage /> } />

            <Route path={'/'} element={ <HeaderNavbar /> }/>
        </Routes>
    </div>
  )
}

export default App
