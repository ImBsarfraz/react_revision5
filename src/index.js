import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./CODE/App";
import HooksApp from "./HOOKS/HooksApp";
import RouterApp from "./ROUTER/RouterApp";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
    {/* <HooksApp/> */}
    {/* <RouterApp/> */}
  </React.StrictMode>
)