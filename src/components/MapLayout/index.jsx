import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

export default function MapLayout({ children }) {
  return <Styled.MapLayout>{children}</Styled.MapLayout>;
}

MapLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
