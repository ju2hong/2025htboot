import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Clock from "./chapter04/Clock";
import You from "./you/You";
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <You />
    </React.StrictMode>
  );
}, 1000);

reportWebVitals();
