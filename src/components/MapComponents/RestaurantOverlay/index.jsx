import React from "react";
import Styled from "./styles";

export default function index({ message, bgColor, shadowColor }) {
  return (
    <Styled.RestaurantOverlay {...{ bgColor, shadowColor }}>
      {message}
    </Styled.RestaurantOverlay>
  );
}
