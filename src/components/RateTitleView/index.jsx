import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

export default function RateTitle({ rateTitle }) {
  return (
    <Styled.RateTitle>
      <h2>{rateTitle}</h2>
    </Styled.RateTitle>
  );
}

RateTitle.propTypes = {
  rateTitle: PropTypes.string.isRequired
};
