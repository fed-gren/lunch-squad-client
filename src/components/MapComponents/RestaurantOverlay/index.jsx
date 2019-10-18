import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';
import { styles } from '../../../../config';

RestaurantOverlay.propTypes = {
  message: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  shadowColor: PropTypes.string,
};

RestaurantOverlay.defaultProps = {
  bgColor: styles.themeColor,
  shadowColor: styles.themeShadowColor,
};

export default function RestaurantOverlay({ message, bgColor, shadowColor }) {
  return (
    <Styled.RestaurantOverlay {...{ bgColor, shadowColor }}>
      {message}
    </Styled.RestaurantOverlay>
  );
}
