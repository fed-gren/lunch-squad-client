import React from "react";
import Styled from "./styles";
import ButtonView from "../../SharedComponents/ButtonView";
import { styles } from "../../../../config";

const toggleButtonStyles = {
  width: "4.5rem",
  height: "2.5rem",
  bgColor: styles.themeColor,
  color: "white",
  fontSize: "1.2rem"
};

export default () => {
  return (
    <Styled.ToggleButton>
      <ButtonView name="필터" {...toggleButtonStyles}></ButtonView>
    </Styled.ToggleButton>
  );
};
