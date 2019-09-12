import React from "react";
import Styled from "./styles";

export default function index({ rate }) {
  return (
    <Styled.RateText>
      <span>{rate === 0 ? "?" : rate}</span>점
    </Styled.RateText>
  );
}
