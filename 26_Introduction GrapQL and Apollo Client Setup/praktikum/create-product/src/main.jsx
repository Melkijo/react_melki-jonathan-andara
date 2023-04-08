import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://brave-fish-82.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "nTBhJr4SgD5egtx89Fnc4xmhhSrCu7Dp3Q4YiKto73n1lVowcUYiS4zOyvig7rTm",
  },
});

client.query({
  query: gql`
    query MyProducts {
      products {
        id
        name
        category
        created_at
      }
    }
  `,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
