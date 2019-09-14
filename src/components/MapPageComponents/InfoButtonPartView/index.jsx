import React from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
//components
import LinkButtonView from "../../LinkButtonView";

export default function index({ id }) {
  const descButtonStyles = {
    bgColor: "transparent",
    color: styles.themeColor,
    padding: "0 0 0 1rem",
    height: "100%"
  };
  // const detailPath = `/detail/${id}`;
  const detailPath = `/detail`;

  return (
    <Styled.DescButtonPart>
      <LinkButtonView to="/post-review" name="리뷰쓰기" {...descButtonStyles} />
      <LinkButtonView to={detailPath} name="상세보기" {...descButtonStyles} />
    </Styled.DescButtonPart>
  );
}
