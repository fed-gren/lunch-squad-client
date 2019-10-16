import React from "react";
import { Route } from "react-router-dom";

import LoginModalView from "../ModalContainer";

export default function ModalSwitch() {
  return (
    <div>
      <Route path="/login" children={<LoginModalView />} />
    </div>
  );
}