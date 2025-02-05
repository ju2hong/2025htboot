import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import Clock from "./chapter04/Clock";
// import You from "./you/You";
// import CommentList from "./chapter05/CommentList";
// import NotificationList from "./chapter06/NotificationList";
import App from "./App6";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);

reportWebVitals();
