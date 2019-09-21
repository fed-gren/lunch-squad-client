import React from "react";
import Styled from "./styles";

export default function index({ imageUrl }) {
  return (
    <Styled.Thumbnail>
      <img src={imageUrl} alt="thumbnail" />
    </Styled.Thumbnail>
  );
}
