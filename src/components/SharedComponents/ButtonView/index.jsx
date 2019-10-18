import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../LinkButtonView/styles';

ButtonView.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClick: PropTypes.func,
  isOff: PropTypes.bool,
};

ButtonView.defaultProps = {
  onClick: () => { },
  isOff: false,
};

export default function ButtonView({
  name,
  onClick,
  isOff,
  ...styles
}) {
  return (
    <Styled.Button
      {...styles}
      onClick={(event) => onClick && onClick(event)}
      {...{ isOff }}
    >
      {name}
    </Styled.Button>
  );
}
