import React, { useContext } from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
import { LoginContext } from "../../../contexts/LoginContext";
import { loginMessages } from "../../../constants";

import ButtonView from "../../SharedComponents/ButtonView";
import LinkButtonView from "../../SharedComponents/LinkButtonView";

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
          <ButtonView
            name={loginMessages.forgotPassword.SUBMIT_BUTTON}
            {...styles.modal.submitButton }
          />
          <LinkButtonView
            name={loginMessages.forgotPassword.CLOSE_BUTTON}
            to={`${background}`} {...styles.modal.closeButton}
          />
        </div>
      </Styled.ForgotPasswordModalContents>
    </>
  );
}