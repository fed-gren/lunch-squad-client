import React, { useContext, useCallback } from "react";
import Styled from "./styles";
import ButtonView from "../../SharedComponents/ButtonView";
import { FilterContext } from "../../../contexts/FilterContext";

const toggleButtonStyles = {
  width: "4.5rem",
  height: "2.5rem",
  fontSize: "1.2rem",
  border: "1px solid #888",
  borderRadius: "0",
  activeBgColor: "#888"
};

export default () => {
  const { state, setState } = useContext(FilterContext);
  const toggleIsShow = useCallback(
    _ => setState({ ...state, isShow: !state.isShow }),
    [state.isShow]
  );

  return (
    <Styled.ToggleButton>
      <ButtonView
        name="필터"
        {...toggleButtonStyles}
        onClick={toggleIsShow}
      ></ButtonView>
    </Styled.ToggleButton>
  );
};
