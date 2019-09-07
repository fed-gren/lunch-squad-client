import React from "react";
import Styled from "./styles";
//components
import ReviewItemTopView from "../ReviewItemTopView";
import ReviewItemBottomView from "../ReviewItemBottomView";

export default function index({ username, regDate, review }) {
  return (
    <Styled.ReviewItem>
      <ReviewItemTopView {...{ username, regDate }}></ReviewItemTopView>
      <ReviewItemBottomView {...{ review }}></ReviewItemBottomView>
    </Styled.ReviewItem>
  );
}
