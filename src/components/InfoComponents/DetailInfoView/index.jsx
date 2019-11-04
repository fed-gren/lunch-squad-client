import React, { useCallback, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';
import Styled from './styles';
import { styles } from '../../../../config';

import ThumbnailView from '../../SharedComponents/ThumbnailView';
import TopbarLayoutView from '../../SharedComponents/TopbarLayoutView';
import LinkButtonView from '../../SharedComponents/LinkButtonView';
import ContactInfoView from '../ContactInfoView';
import { BeforeStateContext } from '../../../contexts/BeforeStateContext';

DetailInfoView.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  businessHour: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};

export default function DetailInfoView({
  restaurantName,
  imageURL,
  businessHour,
  contactNumber,
}) {
  const { beforeState, setBeforeState } = useContext(BeforeStateContext);
  const clickHandler = useCallback(() => {
    setBeforeState({
      ...beforeState,
      pathname: '',
    });
  }, []);

  useEffect(() => {
    setBeforeState({
      ...beforeState,
      pathname: window.location.pathname,
    });
  }, []);

  return (
    <div>
      <TopbarLayoutView>
        <LinkButtonView
          name={<FaArrowLeft />}
          {...styles.backButton}
          to="/"
          onClick={clickHandler}
        />
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
