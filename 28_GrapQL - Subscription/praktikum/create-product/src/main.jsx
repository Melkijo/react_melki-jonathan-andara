import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Form from "./pages/Form";
import Login from "./pages/Login";
import App from "./App";
import StoreManagement from "./pages/StoreManagement";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
const httpLink = new HttpLink({
  uri: "https://neat-teal-79.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "7gUDpx46vxoIGsvZq03il3OF2CRjBlSHUjYYSzJPHyoDACaAruOdeOIs29nfNacT",
  },
});

const wsLink = new WebSocketLink({
  uri: `wss://neat-teal-79.hasura.app/v1/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "7gUDpx46vxoIGsvZq03il3OF2CRjBlSHUjYYSzJPHyoDACaAruOdeOIs29nfNacT",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
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
