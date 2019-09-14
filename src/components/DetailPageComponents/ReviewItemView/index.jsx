import React from "react";
import Styled from "./styles";
//components
import ReviewItemTopView from "../ReviewItemTopView";
import ReviewItemBottomView from "../ReviewItemBottomView";

export default function index({
  username,
  regDate,
  review,
  tasteScore,
  priceScore
}) {
  return (
    <Styled.ReviewItem>
      <ReviewItemTopView
        {...{ username, regDate, tasteScore, priceScore }}
      ></ReviewItemTopView>
      <ReviewItemBottomView {...{ review }}></ReviewItemBottomView>
    </Styled.ReviewItem>
  );
}
