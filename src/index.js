import Layout from "components/layout/layout";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import { GlobalStyle } from "./GlogalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
    <GlobalStyle />
  </React.StrictMode>
);
