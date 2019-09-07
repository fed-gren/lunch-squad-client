import React from "react";
import Styled from "./styles";
//components
import ReviewItemInfoView from "../ReviewItemInfoView";
import ReviewItemScoreView from "../ReviewItemScoreView";

export default function index({ username, regDate, tasteScore, priceScore }) {
  return (
    <Styled.ReviewItemTop>
      <ReviewItemInfoView {...{ username, regDate }}></ReviewItemInfoView>
      <ReviewItemScoreView
        {...{ tasteScore, priceScore }}
      ></ReviewItemScoreView>
    </Styled.ReviewItemTop>
  );
}
