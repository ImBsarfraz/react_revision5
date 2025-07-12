import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./CODE/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
    {/* <HooksApp/> */}
    {/* <RouterApp/> */}
  </React.StrictMode>
)