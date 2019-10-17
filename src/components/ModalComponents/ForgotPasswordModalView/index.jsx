import React, { useContext } from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
import { LoginContext } from "../../../contexts/LoginContext";
import { loginMessages } from "../../../constants";

import ButtonView from "../../SharedComponents/ButtonView";
import LinkButtonView from "../../SharedComponents/LinkButtonView";

const closeButtonStyles = {
  color: "#f0f0f0",
  width: "3.6rem",
  height: "2.2rem",
  borderRadius: "0.2rem",
  bgColor: "#f66"
}

const signupButtonStyles = {
  ...closeButtonStyles,
  bgColor: styles.filteredItemColor
}

export default function ForgotPasswordModalView() {
  const { background } = useContext(LoginContext);

  return (
    <>
      <Styled.ForgotPasswordModalTitle>
        <p>{loginMessages.forgotPassword.TITLE}</p>
      </Styled.ForgotPasswordModalTitle>
      <Styled.ForgotPasswordModalContents>
        <div className="inputs">
          <div className="input-email">
            <label htmlFor="email">{loginMessages.signup.EMAIL_LABEL}</label>
            <input type="email" name="email" id="email" />
          </div>
        </div>
        <div className="buttons">
          <ButtonView name={loginMessages.forgotPassword.SUBMIT_BUTTON} {...signupButtonStyles} />
          <LinkButtonView name={loginMessages.forgotPassword.CLOSE_BUTTON} to={`${background}`} {...closeButtonStyles} />
        </div>
      </Styled.ForgotPasswordModalContents>
    </>
  );
}