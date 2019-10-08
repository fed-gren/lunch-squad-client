import React, { useContext } from "react";
import Styled from "./styles";
import { LoginContext } from "../../contexts/LoginContext";
import ModalView from "../SharedComponents/ModalView";
import ButtonView from "../SharedComponents/ButtonView";

const closeButtonStyles = {
  color: "#f0f0f0",
  width: "3.6rem",
  height: "2.2rem",
  borderRadius: "0.2rem",
  bgColor: "#f66"
}

function LoginModal() {
  const { setOpenFlag } = useContext(LoginContext);
  return (
    <Styled.LoginModal>
      <Styled.LoginModalTitle>
        <p>로그인</p>
      </Styled.LoginModalTitle>
      <Styled.LoginModalContents>
        <div className="inputs">
          <div className="input-email">
            <p>E-mail</p>
            <input type="email" name="email" />
          </div>
          <div className="input-password">
            <p>Password</p>
            <input type="password" name="password" />
          </div>
        </div>
        <div className="buttons">
          <ButtonView name="닫기" onClick={() => setOpenFlag(false)} {...closeButtonStyles} />
        </div>
      </Styled.LoginModalContents>
    </Styled.LoginModal>
  );
}

export default function LoginModalView() {
  const { openFlag } = useContext(LoginContext);

  return (
    openFlag && <ModalView width="22rem" height="15rem">
      <LoginModal />
    </ModalView>
  );
}