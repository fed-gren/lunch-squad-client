import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

ModalView.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default function ModalView({
  children,
  width,
  height,
  ...modalStyles
}) {
  return (
    <Styled.ModalBackground>
      <Styled.Modal {...{width, height}} {...modalStyles}>
        {children}
      </Styled.Modal>
    </Styled.ModalBackground>
  );
}