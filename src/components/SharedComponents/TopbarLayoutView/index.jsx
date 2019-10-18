import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

TopbarLayoutView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default function TopbarLayoutView({ children }) {
  return (
    <Styled.Topbar>{children}</Styled.Topbar>
  );
}
