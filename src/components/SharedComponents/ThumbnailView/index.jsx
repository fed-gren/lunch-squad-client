import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

export default function ThumbnailView({
  width,
  height,
  imageUrl,
  title,
  ...styles
}) {
  return (
    <Styled.Thumbnail {...{ width, height }} {...styles}>
      <picture>
        <img src={imageUrl} alt="thumbnail" {...{ width, height }} />
      </picture>
      {title && <Styled.ThumbnailTitle>{title}</Styled.ThumbnailTitle>}
    </Styled.Thumbnail>
  );
}

ThumbnailView.propTypes = {
  width: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
};
