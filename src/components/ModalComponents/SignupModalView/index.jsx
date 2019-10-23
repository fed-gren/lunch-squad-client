import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import Styled from './styles';
import { styles } from '../../../../config';
import { LoginContext } from '../../../contexts/LoginContext';
import { loginMessages } from '../../../constants';

import ButtonView from '../../SharedComponents/ButtonView';
import LinkButtonView from '../../SharedComponents/LinkButtonView';

export default function SignupModalView() {
  const { background } = useContext(LoginContext);

  const submitHandler = () => {
    console.log('submit');
  };

  const checkPasswordValididation = (evt) => {
    console.log('비밀번호 조건에 맞는지?', evt.target.value);
    // 8글자 이상
    // 대문자 포함
    // 숫자 포함
    // 특수문자 포함
  };

  const passwordCheckBlurHandler = (evt) => {
    console.log('비밀번호 일치하는지 확인하기', evt.target.value);
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
            </div>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-password">
            <div className="labels">
              <label htmlFor="password">{loginMessages.signup.PASSWORD_LABEL}</label>
              <div className="message help">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a data-tip={loginMessages.signup.PASSWORD_RULES} data-event="click focus">
                  <div className="tooltip">&#63;</div>
                </a>
                <ReactTooltip
                  globalEventOff="click"
                  place="right"
                  effect="solid"
                  // eslint-disable-next-line react/jsx-boolean-value
                  html={true}
                />
              </div>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onBlur={checkPasswordValididation}
            />
          </div>
          <div className="input-password-check">
            <div className="labels">
              <label htmlFor="password-check">{loginMessages.signup.PASSWORD_CHECK_LABEL}</label>
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
