import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

ModalView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  width: PropTypes.string,
};

ModalView.defaultProps = {
  width: '10rem',
};

export default function ModalView({
  children,
  width,
  ...modalStyles
}) {
  return (
    <Styled.ModalBackground>
      <Styled.Modal {...{ width }} {...modalStyles}>
        {children}
      </Styled.Modal>
    </Styled.ModalBackground>
  );
}
