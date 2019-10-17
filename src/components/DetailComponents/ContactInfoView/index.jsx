import React from 'react';
import Styled from './styles';

export default function index({ businessHour, contactNumber }) {
  return (
    <Styled.ContactInfo>
      <p>{businessHour}</p>
      <p>{contactNumber}</p>
    </Styled.ContactInfo>
  );
}
