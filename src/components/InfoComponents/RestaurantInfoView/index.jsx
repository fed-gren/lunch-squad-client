import React from 'react';
import Styled from './styles';

export default function RestaurantItemView({
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
