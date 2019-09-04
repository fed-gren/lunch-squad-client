import React from "react";
import Styled from "../LinkButtonView/styles";

const ButtonView = ({ name, onClick, ...styles }) => {
  return (
    <Styled.Button
      {...styles}
      onClick={event => {
        onClick && onClick(event);
      }}
    >
      {name}
    </Styled.Button>
  );
};

export default ButtonView;
