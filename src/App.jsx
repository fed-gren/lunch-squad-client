import { hot } from "react-hot-loader/root";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reset from "styled-reset";
import { MapPageProvider } from "./contexts/MapPageContext";
import { PostingReviewPageProvider } from "./contexts/PostingReviewPageContext";
import { RestaurantDataProvider } from "./contexts/RestaurantDataContext";
//components
import LandingPageView from "./pages/LandingPageView";
import MapPageView from "./pages/MapPageView";
import DetailPageView from "./pages/DetailPageView";
import PostingReviewPageView from "./pages/PostingReviewPageView";

export default hot(() => {
  return (
    <MyApp>
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={LandingPageView} />
        <RestaurantDataProvider>
          <MapPageProvider>
            <Route path="/map" component={MapPageView} />
          </MapPageProvider>
          <Route path="/detail" component={DetailPageView} />
        </RestaurantDataProvider>
        <PostingReviewPageProvider>
          <Route path="/post-review" component={PostingReviewPageView} />
        </PostingReviewPageProvider>
      </Router>
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
