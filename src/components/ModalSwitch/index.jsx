import React from "react";
import { Route, useLocation } from "react-router-dom";

import LoginModalView from "../LoginModalView";

export default function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div>
      {background && <Route path="/login" children={<LoginModalView />} />}
    </div>
  );
}