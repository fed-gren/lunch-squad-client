import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Styled from './styles';
import { styles } from '../../../../config';

import ThumbnailView from '../../SharedComponents/ThumbnailView';
import TopbarLayoutView from '../../SharedComponents/TopbarLayoutView';
import LinkButtonView from '../../SharedComponents/LinkButtonView';
import ContactInfoView from '../ContactInfoView';

export default function index({ restaurantData }) {
  const {
    restaurantName,
    imageURL,
    businessHour,
    contactNumber,
  } = restaurantData;

  return (
    <Styled.DetailInfo>
      <TopbarLayoutView>
        <LinkButtonView name={<FaArrowLeft />} {...styles.backButton} to="/" />
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
