import React from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
//components
import ButtonView from "../../SharedComponents/ButtonView";

export default function index() {
  const registButtonStyles = {
    bgColor: "transparent",
    color: styles.themeColor,
    height: "100%"
  };

  return (
    <Styled.PostingReviewButtonPart>
      <ButtonView name="등록하기" {...registButtonStyles} />
    </Styled.PostingReviewButtonPart>
  );
}
