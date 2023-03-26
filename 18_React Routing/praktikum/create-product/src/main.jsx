import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Form from "./pages/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ element: <Form />, index: true }],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
