import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

MapLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default function MapLayout({ children }) {
  return <Styled.MapLayout>{children}</Styled.MapLayout>;
}
