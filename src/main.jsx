import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Home } from "./pages/Home.jsx";

// const router = createBrowserRouter({
//   path: "/Gaza-proj/",
//   element: <App />,
//   children: [
//     {
//       path: "/Gaza-proj/",
//       element: <Home />,
//     },
//   ],
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
