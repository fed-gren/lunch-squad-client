import React from "react";
import Styled from "./styles";
import ModalView from "../SharedComponents/ModalView";
import ButtonView from "../SharedComponents/ButtonView";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const closeButtonStyles = {
  color: "#f0f0f0",
  width: "3.6rem",
  height: "2.2rem",
  borderRadius: "0.2rem",
  bgColor: "#f66"
}

function LoginModal() {
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  }

  return (
    <Styled.LoginModal>
      <Styled.LoginModalTitle>
        <p>로그인</p>
      </Styled.LoginModalTitle>
      <Styled.LoginModalContents>
        <div className="inputs">
          <div className="input-email">
            <p>E-mail</p>
            <input type="email" name="email" />
          </div>
          <div className="input-password">
            <p>Password</p>
            <input type="password" name="password" />
          </div>
        </div>
        <div className="buttons">
          <ButtonView name="닫기" onClick={back} {...closeButtonStyles} />
        </div>
      </Styled.LoginModalContents>
    </Styled.LoginModal>
  );
}

export default function LoginModalView() {
  return (
    <ModalView width="22rem" height="15rem">
      <LoginModal />
    </ModalView>
  );
}