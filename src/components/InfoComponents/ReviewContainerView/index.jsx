import React from "react";
import Styled from "./styles";

import SubtitleView from "../../SharedComponents/SubtitleView";
import ReviewListView from "../ReviewListView";

export default function index() {
  return (
    <Styled.ReviewContainer>
      <SubtitleView subtitle="리뷰 &#10004;" />
      <ReviewListView />
    </Styled.ReviewContainer>
  );
}
