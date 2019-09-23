import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

export default function ThumbnailView({ width, imageUrl }) {
  return (
    <Styled.Thumbnail {...{ width }}>
      <picture>
        <img src={imageUrl} alt="thumbnail" />
      </picture>
    </Styled.Thumbnail>
  );
}

ThumbnailView.propTypes = {
  width: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
};
