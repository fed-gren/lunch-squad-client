import React, { useContext } from "react";
import Styled from "./styles";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantItemView from "../RestaurantItemView";

export default function RestaurantListView() {
  const { filteredRestaurants, setSelectedRestaurant } = useContext(
    RestaurantContext
  );

  return (
    <Styled.RestaurantList>
      {filteredRestaurants &&
        filteredRestaurants.map(({ ...info }, idx, arr) => (
          <RestaurantItemView
            key={info.id}
            {...info}
            restaurantData={arr[idx]}
          ></RestaurantItemView>
        ))}
    </Styled.RestaurantList>
  );
}
