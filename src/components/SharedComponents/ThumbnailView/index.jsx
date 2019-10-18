import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

ThumbnailView.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
};

ThumbnailView.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default function ThumbnailView({
  width,
  height,
  imageUrl,
  ...styles
}) {
  return (
    <Styled.Thumbnail
      {...{ width, height }}
      {...styles}
    >
      <picture>
        <img
          src={imageUrl}
          alt="thumbnail"
          {...{ width, height }}
        />
      </picture>
    </Styled.Thumbnail>
  );
}
