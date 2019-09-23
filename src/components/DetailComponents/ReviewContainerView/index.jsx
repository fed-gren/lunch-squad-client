import React from "react";
import Styled from "./styles";

import SubtitleView from "../../SharedComponents/SubtitleView";

export default function index() {
  return (
    <Styled.ReviewContainer>
      <SubtitleView subtitle="리뷰" />
    </Styled.ReviewContainer>
  );
}
