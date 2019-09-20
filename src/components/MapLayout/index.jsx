import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

export default function MapLayout({ children }) {
  return <Styled.MapLayout>{children}</Styled.MapLayout>;
}

MapLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
