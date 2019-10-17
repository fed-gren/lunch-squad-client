import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';
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
    <div>
      <TopbarLayoutView>
        <LinkButtonView name={<FaArrowLeft />} {...styles.backButton} to="/" />
      </TopbarLayoutView>
      <Styled.DetailInfo>
        <p>
3.9
          <span><MdStar /></span>
        </p>
        {' '}
        {/* TODO: 평점 데이터 추가 되면 수정해야함. */}
        <h3>{restaurantName}</h3>
        <ThumbnailView
          imageUrl={imageURL}
          width="240px"
          height="200px"
        />
        <ContactInfoView {...{ businessHour, contactNumber }} />
      </Styled.DetailInfo>
      {/* TODO:in restaurant data has not menus */}
      {/* <MenuListView /> */}
    </div>
  );
}
