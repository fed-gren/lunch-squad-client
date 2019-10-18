import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

SubtitleView.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default function SubtitleView({ subtitle }) {
  return (
    <Styled.Subtitle>
      <h3>{subtitle}</h3>
    </Styled.Subtitle>
  );
}
