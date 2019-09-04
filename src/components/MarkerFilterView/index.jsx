import React from "react";
import Styled from "./styles";
import { FaFilter, FaThumbsUp } from "react-icons/fa";
import { styles } from "../../../config";

import FilteredCategoryView from "../FilteredCategoryView";
import MarkerFilterControlView from "../MarkerFilterControlView";
import ButtonView from "../ButtonView";

export default () => {
  const filteredItem = ["한식", "일식", "양식", "중식"];
  const makeButtonStyles = name => ({
    name,
    width: "2.4rem",
    height: "2.4rem",
    borderRadius: "1.2rem",
    fontSize: "1rem",
    color: "#fff",
    bgColor: styles.filteredItemColor
  });

  return (
    <Styled.MarkerFilter>
      <FilteredCategoryView>
        {filteredItem.map(item => {
          return <div>{item}</div>;
        })}
      </FilteredCategoryView>
      <MarkerFilterControlView>
        <ButtonView {...makeButtonStyles(<FaThumbsUp />)} />
        <ButtonView
          {...makeButtonStyles(<FaFilter />)}
          position="absolute"
          right="1rem"
        />
      </MarkerFilterControlView>
    </Styled.MarkerFilter>
  );
};
