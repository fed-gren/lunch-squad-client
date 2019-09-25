import { hot } from "react-hot-loader/root";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RestaurantProvider } from "./contexts/RestaurantContext";
//components
import Layout from "./components/Layout";
import MapView from "./components/MapComponents/MapView";
import InfoView from "./components/InfoComponents/InfoView";
import DetailView from "./components/DetailComponents/DetailView";

export default hot(() => {
  return (
    <MyApp>
      <GlobalStyle />
      <Layout>
        <RestaurantProvider>
          <MapView />
          <Router>
            <Route exact path="/" component={InfoView} />
            <Route path="/:id" component={DetailView} />
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
`;
