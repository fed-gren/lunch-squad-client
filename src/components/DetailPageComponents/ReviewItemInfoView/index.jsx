import React from "react";
import Styled from "./styles";

export default function index({ username, regDate }) {
  return (
    <Styled.ReviewItemInfo>
      <p className="username">{username}</p>
      <p className="regDate">{regDate}</p>
    </Styled.ReviewItemInfo>
  );
}
