import React from "react";
import Styled from "./styles";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import ModalView from "../../SharedComponents/ModalView";
import LoginModalView from "../LoginModalView";
import SignupModalView from "../SignupModalView";
import ForgotPasswordModalView from "../ForgotPasswordModalView";

function Container() {
  let { path } = useRouteMatch();

  return (
    <Styled.ModalContainer>
      <Switch>
        <Route exact path={path}>
          <LoginModalView />
        </Route>
        <Route path={`${path}/signup`}>
          <SignupModalView />
        </Route>
        <Route path={`${path}/forgot-password`}>
          <ForgotPasswordModalView />
        </Route>
      </Switch>
    </Styled.ModalContainer>
  );
}

export default function ModalContainer() {
  return (
    <ModalView width="22rem">
      <Container />
    </ModalView>
  );
}