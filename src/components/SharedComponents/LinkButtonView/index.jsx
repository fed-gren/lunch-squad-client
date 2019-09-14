import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const LinkButtonView = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    activeClassName,
    name,
    ...styles
  } = props;

  return (
    <Styled.Button
      {...styles}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    >
      {name}
    </Styled.Button>
  );
};

LinkButtonView.propTypes = {
  to: PropTypes.string.isRequired
};

export default withRouter(LinkButtonView);
