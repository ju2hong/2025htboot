import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import Clock from "./chapter04/Clock";
// import You from "./you/You";
// import CommentList from "./chapter05/CommentList";
import NotificationList from "./chapter06/NotificationList";

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <NotificationList />
    </React.StrictMode>
  );
}, 1000);

reportWebVitals();
