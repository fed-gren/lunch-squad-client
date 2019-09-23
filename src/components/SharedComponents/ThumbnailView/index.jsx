import React from "react";
import Styled from "./styles";
import PropTypes from "prop-types";

export default function ThumbnailView({ width, height, imageUrl, title }) {
  return (
    <Styled.Thumbnail {...{ width, height }}>
      <picture>
        <img src={imageUrl} alt="thumbnail" />
      </picture>
      {title && <Styled.ThumbnailTitle>{title}</Styled.ThumbnailTitle>}
    </Styled.Thumbnail>
  );
}

ThumbnailView.propTypes = {
  width: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
};
