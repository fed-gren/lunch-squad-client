import { hot } from "react-hot-loader/root";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import reset from "styled-reset";
//components
import LandingPageView from "./pages/LandingPageView";
import MapPageView from "./pages/MapPageView";

export default hot(() => {
  return (
    <MyApp>
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={LandingPageView} />
        <Route path="/map" component={MapPageView} />
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
