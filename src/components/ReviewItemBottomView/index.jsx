import React, { useState } from "react";
import Styled from "./styles";
import { styles } from "../../../config";
import Truncate from "react-truncate";

//components
import ButtonView from "../ButtonView";

export default function index({ review }) {
  const [foldFlag, setFoldFlag] = useState(true);
  const [truncateLines] = useState(2);
  const foldButtonStyles = {
    bgColor: "transparent",
    color: styles.themeColor,
    height: "100%",
    padding: "0",
    width: "auto",
    margin: "0 0 0 .4rem"
  };

  return (
    <Styled.ReviewItemBottom>
      <Truncate
        lines={foldFlag && truncateLines}
        ellipsis={
          <span>
            ...
            <ButtonView
              name="펼치기"
              onClick={() => setFoldFlag(false)}
              {...foldButtonStyles}
            />
          </span>
        }
      >
        {review}
        {!foldFlag && (
          <ButtonView
            name="접기"
            onClick={() => setFoldFlag(true)}
            {...foldButtonStyles}
          />
        )}
      </Truncate>
    </Styled.ReviewItemBottom>
  );
}
