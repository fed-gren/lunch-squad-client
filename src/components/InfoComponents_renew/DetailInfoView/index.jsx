import React from "react";
import Styled from "./styles";
import { styles } from "../../../../config";
import { FaArrowLeft } from "react-icons/fa";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import TopbarLayoutView from "../../SharedComponents/TopbarLayoutView";
import LinkButtonView from "../../SharedComponents/LinkButtonView";
import ContactInfoView from "../ContactInfoView";

export default function index({ restaurantData }) {
  const {
    restaurantName,
    imageURL,
    businessHour,
    contactNumber
  } = restaurantData;

  return (
    <div>
      <TopbarLayoutView>
        <LinkButtonView name={<FaArrowLeft />} {...styles.backButton} to="/" />
      </TopbarLayoutView>
      <Styled.DetailInfo>
        <ThumbnailView
          title={restaurantName}
          imageUrl={imageURL}
          width="200px"
          height="200px"
        />
        <ContactInfoView {...{ restaurantName, businessHour, contactNumber }} />
      </Styled.DetailInfo>
      {/* TODO:in restaurant data has not menus */}
      {/* <MenuListView /> */}
    </div>
  );
}
