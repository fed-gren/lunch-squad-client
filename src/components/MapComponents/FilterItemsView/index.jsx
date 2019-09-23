import React, { useContext } from "react";
import Styled from "./styles";
import { FilterContext } from "../../../contexts/FilterContext";

import FilterTitleView from "../FilterTitleView";
import FilterButtonsView from "../FilterbuttonsView";

export default () => {
  const { state } = useContext(FilterContext);

  return (
    state.isShow && (
      <Styled.FilterItems>
        <FilterTitleView filterTitle="음식 분류" />
        <FilterButtonsView />
      </Styled.FilterItems>
    )
  );
};
