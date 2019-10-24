import React, { useContext, useState } from 'react';
import Styled from './styles';
import { styles } from '../../../../config';
import { LoginContext } from '../../../contexts/LoginContext';
import { loginMessages } from '../../../constants';
import { checkValidation, cognito } from '../../../utils';

import ButtonView from '../../SharedComponents/ButtonView';
import LinkButtonView from '../../SharedComponents/LinkButtonView';

export default function ForgotPasswordModalView() {
  const { background } = useContext(LoginContext);
  const [state, setState] = useState({
    curEmail: '',
    emailInputMessage: '',
    emailPassFlag: false,
    curVerificationCode: '',
    verificationCodeInputMessage: '',
    verificationCodePassFlag: false,
    curNewPassword: '',
    curNewCheckPassword: '',
    newCheckPasswordInputMessage: '',
    newCheckPasswordPassFlag: false,
  });

  const setEmailCheckMessage = (evt) => {
    const email = evt.target.value;
    const { INVALID_EMAIL } = loginMessages.forgotPassword;
    const emailCheckResult = checkValidation.email(email);

    setState({
      ...state,
      emailInputMessage: emailCheckResult
        ? ''
        : INVALID_EMAIL,
      emailPassFlag: emailCheckResult,
      curEmail: email,
    });
  };

  // const setCurPassword = (evt) => {
  //   const password = evt.target.value;

  //   setState({
  //     ...state,
  //     curNewPassword: password,
  //   });
  // };

  // const setVerificationCodeCheckMessage = (evt) => {
  //   const verificationCode = evt.target.value;
  //   const { AUTH_MISSING } = loginMessages.forgotPassword;
  //   const verificationCodeCheckResult = evt.target.value !== '';

  //   setState({
  //     ...state,
  //     verificationCodeInputMessage: verificationCodeCheckResult
  //       ? ''
  //       : AUTH_MISSING,
  //     verificationCodePassFlag: verificationCodeCheckResult,
  //     curVerificationCode: verificationCode,
  //   });
  // };

  // const setPasswordSameCheckMessage = (evt) => {
  //   const checkPassword = evt.target.value;
  //   const { NOT_SAME_NEW_PASSWORD } = loginMessages.forgotPassword;
  //   const passwordSameCheckResult = checkValidation.checkPassword(
  //     state.curNewPassword, checkPassword,
  //   );

  //   setState({
  //     ...state,
  //     newCheckPasswordInputMessage: passwordSameCheckResult
  //       ? ''
  //       : NOT_SAME_NEW_PASSWORD,
  //     curNewCheckPassword: checkPassword,
  //     newCheckPasswordPassFlag: passwordSameCheckResult,
  //   });
  // };


  // const checkAllPass = () => state.emailPassFlag
  //   && state.verificationCodePassFlag
  //   && state.newCheckPasswordPassFlag;

  const sendVerificationCode = () => {
    if (state.emailPassFlag) {
      cognito.sendVerificationCode({
        email: state.curEmail,
      });
    }
  };

  // const setNewPassword = () => {
  //   if (checkAllPass()) {
  //     cognito.setNewPassword({
  //       email: state.curEmail,
  //       verificationCode: state.curVerificationCode,
  //       newPassword: state.curNewPassword,
  //     });
  //   }
  // };

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
              <p className="message">{state.emailInputMessage}</p>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              onBlur={setEmailCheckMessage}
            />
            <div className="sub-button">
              <ButtonView
                name={loginMessages.forgotPassword.GET_AUTH_BUTTON}
                {...styles.modal.subButton}
                bgColor={state.emailPassFlag
                  ? styles.modal.submitButton.bgColor
                  : styles.modal.submitButton.disableColor}
                onClick={sendVerificationCode}
              />
            </div>
          </div>
          {/* <div className="input-auth">
            <div className="labels">
              <label htmlFor="auth">{loginMessages.forgotPassword.AUTH_LABEL}</label>
              <p className="message">{state.verificationCodeInputMessage}</p>
            </div>
            <input
              type="text"
              name="auth"
              id="auth"
              onBlur={setVerificationCodeCheckMessage}
            />
          </div>
          <div className="input-new-password">
            <div className="labels">
              <label htmlFor="new-password">{loginMessages.forgotPassword.NEW_PASSWORD_LABEL}</label>
            </div>
            <input
              type="password"
              name="new-password"
              id="new-password"
              onBlur={setCurPassword}
            />
          </div>
          <div className="input-new-password-check">
            <div className="labels">
              <label htmlFor="new-password-check">{loginMessages.forgotPassword.NEW_PASSWORD_CHECK_LABEL}</label>
              <p className="message">
                {state.newCheckPasswordInputMessage}
              </p>
            </div>
            <input
              type="password"
              name="new-password-check"
              id="new-password-check"
              onBlur={setPasswordSameCheckMessage}
            />
          </div> */}
        </div>
        <div className="buttons">
          {/* <ButtonView
            name={loginMessages.forgotPassword.SUBMIT_BUTTON}
            {...styles.modal.submitButton}
            bgColor={checkAllPass()
              ? styles.modal.submitButton.bgColor
              : styles.modal.submitButton.disableColor}
            onClick={setNewPassword}
          /> */}
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
