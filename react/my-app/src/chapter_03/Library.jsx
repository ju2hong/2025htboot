export default Library;
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Library from "./chapter_03/Library";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
