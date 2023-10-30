import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomeworkPage from "./main-page/src/homework-page";
import Layout from "./layouts/Layout";
import Homework10Part2 from "./homeworks/homework10Part2/Homework10-part2";

function App() {
  return (
<Routes>
  <Route path='/layouts' element={<Layout />} />
  <Route index element={<HomeworkPage /> } />
  <Route path={'homework10'} element={<Homework10Part2 /> } />

</Routes>
  );
}

export default App;
