import React from 'react';
import Styled from '../LinkButtonView/styles';

const ButtonView = ({
  name, onClick, isOff, ...styles
}) => (
  <Styled.Button
    {...styles}
    onClick={(event) => onClick && onClick(event)}
    {...{ isOff }}
  >
    {name}
  </Styled.Button>
);

export default ButtonView;
