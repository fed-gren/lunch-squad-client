import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return <Styled.Layout>{children}</Styled.Layout>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
