import React from "react";
import Styled from "./styles";
import { FaThumbsUp } from "react-icons/fa";
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

  const makeFilterButtonStyles = name => ({
    name,
    bgColor: styles.filteredItemColor,
    color: "#fff",
    width: "3rem",
    height: "2rem",
    margin: "0 0.4rem 0 0"
  });

  return (
    <Styled.MarkerFilter>
      <FilteredCategoryView>
        {filteredItem.map(item => {
          return <ButtonView {...makeFilterButtonStyles()} name={item} />;
        })}
      </FilteredCategoryView>
      <MarkerFilterControlView>
        <ButtonView {...makeButtonStyles(<FaThumbsUp />)} />
      </MarkerFilterControlView>
    </Styled.MarkerFilter>
  );
};
