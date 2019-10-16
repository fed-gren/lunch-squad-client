import React from "react";
import Styled from "./styles";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import ModalView from "../../SharedComponents/ModalView";
import LoginModalView from "../LoginModalView";

function Container() {
  let { path } = useRouteMatch();

  return (
    <Styled.ModalContainer>
      <Switch>
        <Route exact path={path}>
          <LoginModalView />
        </Route>
        <Route path={`${path}/signup`}>회원가입 합시다.</Route>
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