import React, { useCallback } from "react";
import Styled from "./styles";
import PropTypes from "prop-types";
import { noteMessages } from "../../../constants";

ContactInfoView.propTypes = {
  businessHour: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
}

export default function ContactInfoView({ businessHour, contactNumber }) {
  const getValidBusinessHour = useCallback(businessHour =>
    businessHour.length < 5 || businessHour === "-" ?
      noteMessages.NO_BUSINESS_HOUR :
      businessHour
    , [businessHour]);

  const getValidContactNumber = useCallback(contactNumber =>
    contactNumber.length < 5 || contactNumber === "-" ?
      noteMessages.NO_CONTACT_NUMBER :
      contactNumber
    , [contactNumber]);

  return (
    <Styled.ContactInfo>
      <p>{getValidBusinessHour(businessHour)}</p>
      <p>{getValidContactNumber(contactNumber)}</p>
    </Styled.ContactInfo>
  );
}
