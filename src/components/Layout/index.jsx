import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

export default function Layout({ children }) {
  return <Styled.Layout>{children}</Styled.Layout>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
