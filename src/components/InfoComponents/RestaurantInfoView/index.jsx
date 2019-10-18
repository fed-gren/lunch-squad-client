import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

RestaurantItemsView.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  recommendedMenu: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  hoverFlag: PropTypes.bool.isRequired,
};

export default function RestaurantItemsView({
  restaurantName,
  recommendedMenu,
  price,
  hoverFlag,
}) {
  return (
    <Styled.RestaurantInfo>
      <Styled.RestaurantTitle {...{ hoverFlag }}>
        <h4>{restaurantName}</h4>
      </Styled.RestaurantTitle>
      <div>
        추천메뉴:
        {recommendedMenu}
      </div>
      <div>
        가격:
        {price}
        원
      </div>
    </Styled.RestaurantInfo>
  );
}
