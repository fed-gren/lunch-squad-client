import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Styled from './styles';
import { styles } from '../../../../config';
import { LoginContext } from '../../../contexts/LoginContext';
import { loginMessages } from '../../../constants';

import ButtonView from '../../SharedComponents/ButtonView';
import LinkButtonView from '../../SharedComponents/LinkButtonView';

const signupLinkStyles = {
  fontSize: '0.8rem',
  color: '#2980b9',
  width: 'auto',
  height: '1.3rem',
};

export default function LoginModalView() {
  const { background } = useContext(LoginContext);
  const { url } = useRouteMatch();

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
          <ButtonView name={loginMessages.login.LOGIN_BUTTON} {... styles.modal.submitButton} />
          <LinkButtonView name={loginMessages.login.CLOSE_BUTTON} to={`${background}`} {...styles.modal.closeButton} />
        </div>
      </Styled.LoginModalContents>
    </>
  );
}
