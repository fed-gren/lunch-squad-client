import React, { useContext } from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
import { LoginContext } from "../../../contexts/LoginContext";
import { useRouteMatch } from "react-router-dom";
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

const loginButtonStyles = {
  ...closeButtonStyles,
  bgColor: styles.filteredItemColor
}

const signupLinkStyles = {
  fontSize: "0.8rem",
  color: "#2980b9",
  width: "auto",
  height: "1.3rem"
}

export default function LoginModalView() {
  const { background } = useContext(LoginContext);
  let { url } = useRouteMatch();

  return (
    <>
      <Styled.LoginModalTitle>
        <p>{loginMessages.login.TITLE}</p>
      </Styled.LoginModalTitle>
      <Styled.LoginModalContents>
        <div className="inputs">
          <div className="input-email">
            <label htmlFor="email">{loginMessages.login.EMAIL_LABEL}</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-password">
            <label htmlFor="password">{loginMessages.login.PASSWORD_LABEL}</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div className="signup-help">
          <LinkButtonView
            name={loginMessages.login.LINK_TO_SIGNUP}
            to={`${url}/signup`}
            {...signupLinkStyles}
          />
        </div>
        <div className="forgot-password">
          <LinkButtonView
            name={loginMessages.login.LINK_TO_FORGOT_PASSWORD}
            to={`${url}/forgot-password`}
            {...signupLinkStyles}
          />
        </div>
        <div className="buttons">
          <ButtonView name={loginMessages.login.LOGIN_BUTTON} {...loginButtonStyles} />
          <LinkButtonView name={loginMessages.login.CLOSE_BUTTON} to={`${background}`} {...closeButtonStyles} />
        </div>
      </Styled.LoginModalContents>
    </>
  );
}