import React from "react";
import Styled from "./styles";
import ButtonView from "../../SharedComponents/ButtonView";
import { styles } from "../../../../config";

const toggleButtonStyles = {
  width: "3rem",
  fontSize: "1rem",
  color: "#fff",
  bgColor: styles.filteredItemColor
};

export default () => {
  return (
    <Styled.FilterButtons>
      <ButtonView name="한식" {...toggleButtonStyles}></ButtonView>
      <ButtonView name="일식" {...toggleButtonStyles}></ButtonView>
      <ButtonView name="중식" {...toggleButtonStyles}></ButtonView>
      <ButtonView name="양식" {...toggleButtonStyles}></ButtonView>
    </Styled.FilterButtons>
  );
};
