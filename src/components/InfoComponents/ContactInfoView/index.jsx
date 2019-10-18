import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';
import { noteMessages } from '../../../constants';

ContactInfoView.propTypes = {
  businessHour: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};

export default function ContactInfoView({ businessHour, contactNumber }) {
  const getValidBusinessHour = useCallback((hour) => (hour.length < 5 || hour === '-'
    ? noteMessages.NO_BUSINESS_HOUR
    : hour),
  [businessHour]);

  const getValidContactNumber = useCallback((contact) => (contact.length < 5 || contact === '-'
    ? noteMessages.NO_CONTACT_NUMBER
    : contact),
  [contactNumber]);

  return (
    <Styled.ContactInfo>
      <p>{getValidBusinessHour(businessHour)}</p>
      <p>{getValidContactNumber(contactNumber)}</p>
    </Styled.ContactInfo>
  );
}
