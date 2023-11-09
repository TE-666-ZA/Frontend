import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import HeaderNavbar from "./mainMenu/headerNavbar";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <BrowserRouter >
    <Provider store={store}>
        <HeaderNavbar />
      <App />
    </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
