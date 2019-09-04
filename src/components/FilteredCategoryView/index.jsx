import React from "react";
import Styled from "./styles";

export default function index({ children }) {
  return <Styled.FilteredItem>{children}</Styled.FilteredItem>;
}
