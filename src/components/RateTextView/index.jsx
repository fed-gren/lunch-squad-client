import React from "react";
import Styled from "./styles";

export default function index({ rate }) {
  return <Styled.RateText>{rate === 0 ? "?" : rate} 점</Styled.RateText>;
}
