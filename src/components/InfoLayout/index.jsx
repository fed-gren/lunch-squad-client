import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

InfoLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

InfoLayout.defaultProps = {
  children: null,
};

export default function InfoLayout({ children }) {
  return <Styled.InfoLayout>{children}</Styled.InfoLayout>;
}
