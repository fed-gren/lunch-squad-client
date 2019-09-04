import React from "react";
import Styled from "./styles";

import FilteredCategoryView from "../FilteredCategoryView";

export default () => {
  const filteredItem = ["한식", "일식", "양식", "중식"];
  return (
    <Styled.MarkerFilter>
      <FilteredCategoryView>
        {filteredItem.map(item => {
          return <div>{item}</div>;
        })}
      </FilteredCategoryView>
    </Styled.MarkerFilter>
  );
};
