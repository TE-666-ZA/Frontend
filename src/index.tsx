import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import MainMenu from "./mainMenu/MainMenu";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <MainMenu />
    <App />
    </BrowserRouter>
);


reportWebVitals();
