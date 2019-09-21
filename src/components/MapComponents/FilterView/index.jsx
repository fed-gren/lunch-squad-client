import React from "react";
import Styled from "./styles";
import ToggleButtonView from "../FilterToggleButtonView";
import { FilterProvider } from "../../../contexts/FilterContext";

export default () => {
  return (
    <Styled.Filter>
      <FilterProvider>
        <ToggleButtonView />
      </FilterProvider>
    </Styled.Filter>
  );
};
