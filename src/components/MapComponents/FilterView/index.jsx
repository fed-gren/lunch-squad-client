import React from "react";
import Styled from "./styles";
import { FilterProvider } from "../../../contexts/FilterContext";

import ToggleButtonView from "../FilterToggleButtonView";
import FilterItmesView from "../FilterItemsView";

export default () => {
  return (
    <Styled.Filter>
      <FilterProvider>
        <ToggleButtonView />
        <FilterItmesView />
      </FilterProvider>
    </Styled.Filter>
  );
};
