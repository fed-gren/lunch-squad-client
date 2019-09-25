import React, { useContext, useEffect } from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
import { FaArrowLeft } from "react-icons/fa";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import TopbarLayoutView from "../../SharedComponents/TopbarLayoutView";
import ButtonView from "../../SharedComponents/ButtonView";
import ContactInfoView from "../ContactInfoView";

export default function index({ goBack, restaurantData }) {
  const {
    restaurantName,
    imageURL,
    businessHour,
    contactNumber
  } = restaurantData;

  return (
    <Styled.DetailInfo>
      <TopbarLayoutView>
        <ButtonView
          name={<FaArrowLeft />}
          {...styles.backButton}
          onClick={goBack}
        />
      </TopbarLayoutView>
      <ThumbnailView
        title={restaurantName}
        imageUrl={imageURL}
        height="400px"
      />
      <ContactInfoView {...{ businessHour, contactNumber }} />
      {/* TODO:in restaurant data has not menus */}
      {/* <MenuListView /> */}
    </Styled.DetailInfo>
  );
}
