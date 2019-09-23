import React from "react";
import Styled from "./styles";

export default function index({ subtitle }) {
  return (
    <Styled.Subtitle>
      <h3>{subtitle}</h3>
    </Styled.Subtitle>
  );
}
