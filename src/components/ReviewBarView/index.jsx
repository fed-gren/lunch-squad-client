import React, { useState } from "react";
import Styled from "./styles";
import { styles } from "../../../config";
//components
import ButtonView from "../ButtonView";
import ReviewListView from "../ReviewListView";

export default function index() {
  const [reviewOpenFlag, setReviewOpenFlag] = useState(false);
  const toggleReviewOpenFlag = _ => setReviewOpenFlag(!reviewOpenFlag);

  const getReviewBarPosition = reviewOpenFlag =>
    reviewOpenFlag ? "bottom: calc(100% - 6rem)" : "bottom: 0";

  const reviewButtonStyles = {
    bgColor: "transparent",
    color: styles.themeColor,
    height: "100%"
  };

  return (
    <Styled.ReviewBar {...{ getReviewBarPosition, reviewOpenFlag }}>
      <ButtonView name="리뷰하기" {...reviewButtonStyles} />
      <ButtonView
        name={reviewOpenFlag ? "리뷰닫기" : "리뷰보기"}
        {...reviewButtonStyles}
        onClick={toggleReviewOpenFlag}
      />
      <ReviewListView {...reviewOpenFlag} />
    </Styled.ReviewBar>
  );
}
