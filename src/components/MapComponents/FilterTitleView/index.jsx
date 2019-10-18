import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

FilterTitleView.propTypes = {
  filterTitle: PropTypes.string.isRequired,
};

export default function FilterTitleView({ filterTitle }) {
  return (
    <Styled.FilterTitle>
      <h3>{filterTitle}</h3>
    </Styled.FilterTitle>
  );
}
