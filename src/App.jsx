import { hot } from "react-hot-loader/root";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RestaurantProvider } from "./contexts/RestaurantContext";
import { Helmet } from "react-helmet";
import { metadata } from "../config";
//components
import Layout from "./components/Layout";
import MapView from "./components/MapComponents/MapView";

export default hot(() => {
  return (
    <MyApp>
      <Helmet>
        <title>{metadata.title}</title>
        <link
          rel="icon"
          type="image/png"
          href="https://codesquad.kr/favicon.ico"
          sizes="16x16"
        />
      </Helmet>
      <GlobalStyle />
      <Layout>
        <RestaurantProvider>
          <Router>
            <MapView />
          </Router>
        </RestaurantProvider>
      </Layout>
    </MyApp>
  );
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  :root, body, #root {
    height: 100%;
  }

  button {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
  }
`;

const MyApp = styled.section`
  height: 100%;
  position: relative;
`;
