import React, { useContext } from 'react';
import Styled from './styles';
import { styles } from '../../../../config';
import { LoginContext } from '../../../contexts/LoginContext';
import { loginMessages } from '../../../constants';

import ButtonView from '../../SharedComponents/ButtonView';
import LinkButtonView from '../../SharedComponents/LinkButtonView';

export default function SignupModalView() {
  const { background } = useContext(LoginContext);

  return (
    <>
      <Styled.SignupModalTitle>
        <p>{loginMessages.signup.TITLE}</p>
      </Styled.SignupModalTitle>
      <Styled.SignupModalContents>
        <div className="inputs">
          <div className="input-email">
            <label htmlFor="email">{loginMessages.signup.EMAIL_LABEL}</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-password">
            <label htmlFor="password">{loginMessages.signup.PASSWORD_LABEL}</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="input-password-check">
            <label htmlFor="password-check">{loginMessages.signup.PASSWORD_CHECK_LABEL}</label>
            <input type="password" name="password-check" id="password-check" />
          </div>
        </div>
        <div className="buttons">
          <ButtonView name={loginMessages.signup.SUBMIT_BUTTON} {...styles.modal.submitButton} />
          <LinkButtonView name={loginMessages.signup.CLOSE_BUTTON} to={`${background}`} {...styles.modal.closeButton} />
        </div>
      </Styled.SignupModalContents>
    </>
  );
}
