import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Homework10Part2 from "./homeworks/homework10Part2/Homework10-part2";
import MainPage from "./mainPage/MainPage";
import MainMenu from "./mainMenu/MainMenu";



function App() {
  return (
<Routes>
  <Route path='/' element={<Layout />} />
  <Route index element={<MainPage /> } />
  <Route path={'homework10'} element={<Homework10Part2 /> } />
  <Route path={'/'} element={ <MainMenu /> }/>
</Routes>
  );
}

export default App;
