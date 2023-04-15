import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Form from "./pages/Form";
import Login from "./pages/Login";
import App from "./App";
import StoreManagement from "./pages/StoreManagement";

const client = new ApolloClient({
  uri: "https://neat-teal-79.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "7gUDpx46vxoIGsvZq03il3OF2CRjBlSHUjYYSzJPHyoDACaAruOdeOIs29nfNacT",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/store",
    element: <StoreManagement />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
