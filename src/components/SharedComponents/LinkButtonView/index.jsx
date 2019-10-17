import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styled from './styles';

LinkButtonView.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

function LinkButtonView({
  history,
  location,
  match,
  staticContext,
  to,
  onClick,
  activeClassName,
  name,
  ...styles
}) {
  return (
    <Styled.Button
      {...styles}
      onClick={(event) => {
        onClick && onClick(event);
        history.push(to);
      }}
    >
      {name}
    </Styled.Button>
  );
}

export default withRouter(LinkButtonView);
