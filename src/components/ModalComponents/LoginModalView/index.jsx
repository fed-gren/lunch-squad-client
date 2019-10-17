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
  let history = useHistory();
  let { url } = useRouteMatch();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  }

  return (
    <>
      <Styled.LoginModalTitle>
        <p>로그인</p>
      </Styled.LoginModalTitle>
      <Styled.LoginModalContents>
        <div className="inputs">
          <div className="input-email">
            <label htmlFor="email">이메일 주소</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-password">
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div className="signup-help">
          <LinkButtonView
            name="회원이 아니시라면 회원가입"
            to={`${url}/signup`}
            {...signupLinkStyles}
          />
        </div>
        <div className="forgot-password">
          <LinkButtonView
            name="비밀번호가 기억 안나시나요?"
            to={`${url}/forgot-password`}
            {...signupLinkStyles}
          />
        </div>
        <div className="buttons">
          <ButtonView name="로그인" {...loginButtonStyles} />
          <ButtonView name="닫기" onClick={back} {...closeButtonStyles} />
        </div>
      </Styled.LoginModalContents>
    </>
  );
}