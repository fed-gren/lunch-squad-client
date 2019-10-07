import React from "react";
import Styled from "./styles";

import RestaurantItemsView from "../RestaurantItemsView";

export default function RestaurantListView() {
  return (
    <Styled.RestaurantList>
      <RestaurantItemsView />
    </Styled.RestaurantList>
  );
}
