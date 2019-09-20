import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

export default function InfoLayout({ children }) {
  return <Styled.InfoLayout>{children}</Styled.InfoLayout>;
}

InfoLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
