import React from "react";
import Styled from "./styles";

export default function index({ rate, selectedRate }) {
  return (
    <Styled.RateText>
      <span className={selectedRate && "selected"}>
        {rate !== null ? rate : selectedRate !== null ? selectedRate : "?"}점
      </span>
    </Styled.RateText>
  );
}
