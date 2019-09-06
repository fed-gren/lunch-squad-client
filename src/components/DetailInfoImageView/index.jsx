import React from "react";
import Styled from "./styles";

export default function index() {
  return (
    <Styled.DetailInfoImage>
      <picture>
        <img src="https://source.unsplash.com/random/800x600" alt="image" />
      </picture>
    </Styled.DetailInfoImage>
  );
}
