import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styled from './styles';

LinkButtonView.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  history: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

LinkButtonView.defaultProps = {
  onClick: () => {},
};

function LinkButtonView({
  history,
  to,
  onClick,
  name,
  ...styles
}) {
  return (
    <Styled.Button
      {...styles}
      onClick={(event) => {
        if (onClick) onClick(event);
        history.push(to);
      }}
    >
      {name}
    </Styled.Button>
  );
}

export default withRouter(LinkButtonView);
