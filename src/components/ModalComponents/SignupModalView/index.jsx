import React from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
import { useHistory, useRouteMatch } from "react-router-dom";

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

const signupLinkStyles = {
  fontSize: "0.8rem",
  color: "#2980b9",
  width: "auto"
}

export default function SignupModalView() {
  let history = useHistory();
  let { url } = useRouteMatch();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  }

  return (
    <>
      <Styled.SignupModalTitle>
        <p>회원가입</p>
      </Styled.SignupModalTitle>
      <Styled.SignupModalContents>
        <div className="inputs">
          <div className="input-email">
            <label htmlFor="email">이메일 주소</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-password">
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="input-password-check">
            <label htmlFor="password-check">비밀번호 확인</label>
            <input type="password" name="password-check" id="password-check" />
          </div>
        </div>
        <div className="buttons">
          <ButtonView name="회원가입" {...signupButtonStyles} />
          <ButtonView name="닫기" onClick={back} {...closeButtonStyles} />
        </div>
      </Styled.SignupModalContents>
    </>
  );
}