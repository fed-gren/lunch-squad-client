import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

const FilterTitleView = ({ filterTitle }) => {
  return (
    <Styled.FilterTitle>
      <h3>{filterTitle}</h3>
    </Styled.FilterTitle>
  );
};

FilterTitleView.propTyeps = {
  filterTitle: PropTypes.string.isRequired
};

export default FilterTitleView;
