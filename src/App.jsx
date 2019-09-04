import { hot } from "react-hot-loader/root";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import reset from "styled-reset";
//components
import LandingPageView from "./pages/LandingPageView";

export default hot(() => {
  return (
    <MyApp>
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={LandingPageView} />
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
`;

const MyApp = styled.section`
  height: 100%;
`;
