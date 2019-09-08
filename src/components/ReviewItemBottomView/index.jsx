import React, { useState } from "react";
import Styled from "./styles";
import { styles } from "../../../config";
//components
import ButtonView from "../ButtonView";

export default function index({ review }) {
  const [foldFlag, setFoldFlag] = useState(true);
  const toggleFoldFlag = _ => setFoldFlag(!foldFlag);
  const foldButtonStyles = {
    bgColor: "transparent",
    color: styles.themeColor,
    height: "100%",
    padding: "0"
  };

  return (
    <Styled.ReviewItemBottom>
      <div className="reviewPart">
        <p className={foldFlag ? "folded" : ""}>{review}</p>
      </div>
      <div className="buttonPart">
        <ButtonView
          name={foldFlag ? "펼치기" : "접기"}
          onClick={toggleFoldFlag}
          {...foldButtonStyles}
        />
      </div>
    </Styled.ReviewItemBottom>
  );
}
