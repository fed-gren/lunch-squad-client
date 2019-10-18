import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default function Layout({ children }) {
  return <Styled.Layout>{children}</Styled.Layout>;
}
