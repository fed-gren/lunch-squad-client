import React from "react";
import Styled from "./styles";

export default function RestaurantItemView({ name, recommendedMenu, price }) {
  return (
    <Styled.RestaurantInfo>
      <Styled.RestaurantTitle>
        <h4>{name}</h4>
      </Styled.RestaurantTitle>
      <div>추천메뉴: {recommendedMenu}</div>
      <div>가격: {price}원</div>
    </Styled.RestaurantInfo>
  );
}
