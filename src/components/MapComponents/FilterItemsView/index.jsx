import React from "react";
import Styled from "./styles";

import FilterTitleView from "../FilterTitleView";

export default () => {
  return (
    <Styled.FilterItems>
      <FilterTitleView filterTitle="음식 분류" />
    </Styled.FilterItems>
  );
};
