import { hot } from "react-hot-loader/root";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MapPageProvider } from "./contexts/MapPageContext";
import { PostingReviewPageProvider } from "./contexts/PostingReviewPageContext";
import { RestaurantDataProvider } from "./contexts/RestaurantDataContext";
//components
import LandingPageView from "./pages/LandingPageView";
import MapPageView from "./pages/MapPageView";
import DetailPageView from "./pages/DetailPageView";
import PostingReviewPageView from "./pages/PostingReviewPageView";
import Layout from "./components/Layout";
import MapView from "./components/MapComponents/MapView";
import InfoView from "./components/InfoComponents/InfoView";
import DetailView from "./components/DetailComponents/DetailView";

export default hot(() => {
  return (
    <MyApp>
      <GlobalStyle />
      <Layout>
        <RestaurantDataProvider>
          <MapView />
          <Router>
            <Route exact path="/" component={InfoView} />
            <Route path="/:id" component={DetailView} />
          </Router>
        </RestaurantDataProvider>
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
