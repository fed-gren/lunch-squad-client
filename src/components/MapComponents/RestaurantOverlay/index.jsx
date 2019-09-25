import React from "react";
import Styled from "./styles";

export default function index({ message }) {
  return <Styled.RestaurantOverlay>{message}</Styled.RestaurantOverlay>;
}
