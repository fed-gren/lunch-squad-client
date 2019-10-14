import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

ThumbnailView.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
};

export default function ThumbnailView({
  width,
  height,
  imageUrl,
  ...styles
}) {
  return (
    <Styled.Thumbnail {...{ width, height }} {...styles}>
      <picture>
        <img src={imageUrl} alt="thumbnail" {...{ width, height }} />
      </picture>
    </Styled.Thumbnail>
  );
}
