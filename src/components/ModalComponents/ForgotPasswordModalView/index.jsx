import React, { useContext } from 'react';
import Styled from './styles';
import { styles } from '../../../../config';
import { LoginContext } from '../../../contexts/LoginContext';
import { loginMessages } from '../../../constants';

import ButtonView from '../../SharedComponents/ButtonView';
import LinkButtonView from '../../SharedComponents/LinkButtonView';

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
            <div className="labels">
              <label htmlFor="email">{loginMessages.forgotPassword.EMAIL_LABEL}</label>
              <p className="message">{loginMessages.forgotPassword.SENT_AUTH}</p>
            </div>
            <input type="email" name="email" id="email" />
            <div className="sub-button">
              <ButtonView
                name={loginMessages.forgotPassword.GET_AUTH_BUTTON}
                {...styles.modal.subButton}
              />
            </div>
          </div>
          <div className="input-auth">
            <div className="labels">
              <label htmlFor="auth">{loginMessages.forgotPassword.AUTH_LABEL}</label>
              <p className="message">
                {true
                  ? loginMessages.forgotPassword.AUTH_SUCCESS
                  : loginMessages.forgotPassword.AUTH_FAIL}
              </p>
            </div>
            <input type="text" name="auth" id="auth" />
            <div className="sub-button">
              <ButtonView
                name={loginMessages.forgotPassword.AUTH_BUTTON}
                {...styles.modal.subButton}
              />
            </div>
          </div>
          <div className="input-new-password">
            <div className="labels">
              <label htmlFor="new-password">{loginMessages.forgotPassword.NEW_PASSWORD_LABEL}</label>
            </div>
            <input type="password" name="new-password" id="new-password" />
          </div>
          <div className="input-new-password-check">
            <div className="labels">
              <label htmlFor="new-password-check">{loginMessages.forgotPassword.NEW_PASSWORD_CHECK_LABEL}</label>
              <p className="message">
                {false
                  ? loginMessages.forgotPassword.SAME_NEW_PASSWORD
                  : loginMessages.forgotPassword.NOT_SAME_NEW_PASSWORD}
              </p>
            </div>
            <input type="password" name="new-password-check" id="new-password-check" />
          </div>
        </div>
        <div className="buttons">
          <ButtonView
            name={loginMessages.forgotPassword.SUBMIT_BUTTON}
            {...styles.modal.submitButton}
          />
          <LinkButtonView
            name={loginMessages.forgotPassword.CLOSE_BUTTON}
            to={`${background}`}
            {...styles.modal.closeButton}
          />
        </div>
      </Styled.ForgotPasswordModalContents>
    </>
  );
}
