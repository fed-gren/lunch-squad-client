import React, { useState } from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
//components
import ButtonView from "../../SharedComponents/ButtonView";
import LinkButtonView from "../../SharedComponents/LinkButtonView";
import ReviewListView from "../ReviewListView";

export default function index() {
  const [reviewOpenFlag, setReviewOpenFlag] = useState(false);
  const toggleReviewOpenFlag = _ => setReviewOpenFlag(!reviewOpenFlag);

  const reviewButtonStyles = {
    bgColor: "transparent",
    color: styles.themeColor,
    height: "100%"
  };

  return (
    <Styled.ReviewBar {...{ reviewOpenFlag }}>
      <LinkButtonView
        to="/post-review"
        name="리뷰쓰기"
        {...reviewButtonStyles}
      />
      <ButtonView
        name={reviewOpenFlag ? "리뷰닫기" : "리뷰보기"}
        {...reviewButtonStyles}
        onClick={toggleReviewOpenFlag}
      />
      <ReviewListView {...reviewOpenFlag} />
    </Styled.ReviewBar>
  );
}
