import React, { useContext, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Styled from './styles';
import { styles } from '../../../../config';
import { LoginContext } from '../../../contexts/LoginContext';
import { loginMessages } from '../../../constants';
import { checkValidation, cognito } from '../../../utils';

import ButtonView from '../../SharedComponents/ButtonView';
import LinkButtonView from '../../SharedComponents/LinkButtonView';

export default function SignupModalView() {
  const { background } = useContext(LoginContext);
  const [state, setState] = useState({
    invalidEmailMessage: '',
    emailPassFlag: false,
    curEmail: '',
    invalidUsernameMessage: '',
    usernamePassFlag: false,
    curUsername: '',
    invalidPasswordMessage: '',
    passwordPassFlag: false,
    curPassword: '',
    notSamePasswordMessage: '',
    curCheckPassword: '',
    passwordCheckPassFlag: false,
  });

  const setEmailCheckMessage = (evt) => {
    const email = evt.target.value;
    const { INVALID_EMAIL } = loginMessages.signup;
    const emailCheckResult = checkValidation.email(email);

    setState({
      ...state,
      invalidEmailMessage: emailCheckResult
        ? ''
        : INVALID_EMAIL,
      emailPassFlag: emailCheckResult,
      curEmail: email,
    });
  };

  const setUsernameCheckMessage = (evt) => {
    const username = evt.target.value;
    const { INVALID_USERNAME } = loginMessages.signup;
    const usernameCheckResult = checkValidation.username(username);

    setState({
      ...state,
      invalidUsernameMessage: usernameCheckResult
        ? ''
        : INVALID_USERNAME,
      usernamePassFlag: usernameCheckResult,
      curUsername: username,
    });
  };

  const setPasswordCheckMessage = (evt) => {
    const password = evt.target.value;
    const { INVALID_PASSWORD } = loginMessages.signup;
    const passwordCheckResult = checkValidation.password(password);

    setState({
      ...state,
      invalidPasswordMessage: passwordCheckResult
        ? ''
        : INVALID_PASSWORD,
      curPassword: password,
      passwordPassFlag: passwordCheckResult,
    });
  };

  const passwordCheckBlurHandler = (evt) => {
    const checkPassword = evt.target.value;
    const { NOT_SAME_PASSWORD } = loginMessages.signup;
    const passwordSameCheckResult = checkValidation.checkPassword(state.curPassword, checkPassword);

    setState({
      ...state,
      notSamePasswordMessage: passwordSameCheckResult
        ? ''
        : NOT_SAME_PASSWORD,
      curCheckPassword: checkPassword,
      passwordCheckPassFlag: passwordSameCheckResult,
    });
  };

  const checkAllPass = () => state.emailPassFlag
    && state.usernamePassFlag
    && state.passwordPassFlag
    && state.passwordCheckPassFlag;

  const submitHandler = () => {
    if (checkAllPass()) {
      cognito.register({
        email: state.curEmail,
        username: state.curUsername,
        password: state.curPassword,
      });
    }
  };

  return (
    <>
      <Styled.SignupModalTitle>
        <p>{loginMessages.signup.TITLE}</p>
      </Styled.SignupModalTitle>
      <Styled.SignupModalContents>
        <div className="inputs">
          <div className="input-email">
            <div className="labels">
              <label htmlFor="email">{loginMessages.signup.EMAIL_LABEL}</label>
              <div className="message invalid-email">
                {state.invalidEmailMessage}
              </div>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              onBlur={setEmailCheckMessage}
            />
          </div>
          <div className="input-username">
            <div className="labels">
              <label htmlFor="username">{loginMessages.signup.USERNAME_LABEL}</label>
              <div className="message invalid-username">
                {state.invalidUsernameMessage}
              </div>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              onBlur={setUsernameCheckMessage}
            />
          </div>
          <div className="input-password">
            <div className="labels">
              <label htmlFor="password">
                {loginMessages.signup.PASSWORD_LABEL}
              </label>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a data-tip={loginMessages.signup.PASSWORD_RULES} data-event="click focus">
                <div className="tooltip">&#63;</div>
              </a>
              <ReactTooltip
                globalEventOff="click"
                place="top"
                effect="solid"
                // eslint-disable-next-line react/jsx-boolean-value
                html={true}
              />
              <div className="message invalid-password">
                {state.invalidPasswordMessage}
              </div>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onBlur={setPasswordCheckMessage}
            />
          </div>
          <div className="input-password-check">
            <div className="labels">
              <label htmlFor="password-check">{loginMessages.signup.PASSWORD_CHECK_LABEL}</label>
              <div className="message not-same-password">
                {state.notSamePasswordMessage}
              </div>
            </div>
            <input
              type="password"
              name="password-check"
              id="password-check"
              onBlur={passwordCheckBlurHandler}
            />
          </div>
        </div>
        <div className="buttons">
          <ButtonView
            name={loginMessages.signup.SUBMIT_BUTTON}
            onClick={submitHandler}
            {...styles.modal.submitButton}
            bgColor={!checkAllPass() ? '#666' : styles.modal.submitButton.bgColor}
          />
          <LinkButtonView
            name={loginMessages.signup.CLOSE_BUTTON}
            to={`${background}`}
            {...styles.modal.closeButton}
          />
        </div>
      </Styled.SignupModalContents>
    </>
  );
}
