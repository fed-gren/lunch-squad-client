import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

const FilterTitleView = ({ filterTitle }) => (
  <Styled.FilterTitle>
    <h3>{filterTitle}</h3>
  </Styled.FilterTitle>
);

FilterTitleView.propTyeps = {
  filterTitle: PropTypes.string.isRequired,
};

export default FilterTitleView;
