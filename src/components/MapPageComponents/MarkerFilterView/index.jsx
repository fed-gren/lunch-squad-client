import React, { useContext } from "react";
import Styled from "./styles";
import { FaThumbsUp } from "react-icons/fa";
import { styles } from "../../../../config";
import { MapPageContext } from "../../../contexts/MapPageContext";

import ButtonView from "../../SharedComponents/ButtonView";
import FilteredCategoryView from "../FilteredCategoryView";
import MarkerFilterControlView from "../MarkerFilterControlView";

export default () => {
  const { filteredCategory, setFilteredCategory } = useContext(MapPageContext);
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

  const toggleOnButton = idx => {
    const newCategory = [...filteredCategory];
    newCategory[idx].isOff = !newCategory[idx].isOff;
    setFilteredCategory(newCategory);
  };

  return (
    <Styled.MarkerFilter>
      <FilteredCategoryView>
        {filteredCategory.map(({ name, id, isOff }, idx) => {
          return (
            <ButtonView
              {...makeFilterButtonStyles()}
              name={name}
              key={id}
              isOff={isOff}
              onClick={() => toggleOnButton(idx)}
            />
          );
        })}
      </FilteredCategoryView>
      <MarkerFilterControlView>
        <ButtonView {...makeButtonStyles(<FaThumbsUp />)} />
      </MarkerFilterControlView>
    </Styled.MarkerFilter>
  );
};
