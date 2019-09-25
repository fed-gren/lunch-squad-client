import React, { useContext } from "react";
import Styled from "./styles";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantItemView from "../RestaurantItemView";

export default function RestaurantListView() {
  const { filteredRestaurants } = useContext(RestaurantContext);

  return (
    <Styled.RestaurantList>
      {filteredRestaurants &&
        filteredRestaurants.map(({ ...info }) => (
          <RestaurantItemView key={info.id} {...info}></RestaurantItemView>
        ))}
    </Styled.RestaurantList>
  );
}
