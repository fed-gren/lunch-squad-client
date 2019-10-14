import React, { useCallback } from "react";
import Styled from "./styles";
import PropTypes from "prop-types";
import { noteMessage } from "../../../constants";

ContactInfoView.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  businessHour: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
}

export default function ContactInfoView({ restaurantName, businessHour, contactNumber }) {
  const getValidBusinessHour = useCallback(businessHour =>
    businessHour.length < 5 || businessHour === "-" ?
      noteMessage.NO_BUSINESS_HOUR :
      businessHour
    , [businessHour]);

  const getValidContactNumber = useCallback(contactNumber =>
    contactNumber.length < 5 || contactNumber === "-" ?
      noteMessage.NO_CONTACT_NUMBER :
      contactNumber
    , [contactNumber]);

  return (
    <Styled.ContactInfo>
      <h3>{restaurantName}</h3>
      <p>{getValidBusinessHour(businessHour)}</p>
      <p>{getValidContactNumber(contactNumber)}</p>
    </Styled.ContactInfo>
  );
}
