import React from "react";
import Styled from "./styles";

import RestaurantItemView from "../RestaurantItemView";

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const dummyInfo = {
  name: "aa 식당",
  price: 8000,
  recommendedMenu: "치킨",
  rate: 3.0
};

export default function RestaurantListView() {
  return (
    <Styled.RestaurantList>
      {dummy.map(c => {
        return <RestaurantItemView key={c} {...dummyInfo}></RestaurantItemView>;
      })}
    </Styled.RestaurantList>
  );
}
