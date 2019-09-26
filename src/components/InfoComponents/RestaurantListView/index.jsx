import React, { useContext, useCallback } from "react";
import Styled from "./styles";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantItemView from "../RestaurantItemView";

export default function RestaurantListView() {
  const {
    filteredRestaurants,
    hoveredRestaurant,
    setHoveredRestaurant
  } = useContext(RestaurantContext);

  const mouseEnterHandler = useCallback(info => {
    setHoveredRestaurant(info);
  }, []);
  const mouseLeaveHandler = useCallback(_ => {
    setHoveredRestaurant(null);
  }, []);

  return (
    <Styled.RestaurantList>
      {filteredRestaurants &&
        filteredRestaurants.map(({ ...info }) => (
          <RestaurantItemView
            key={info.id}
            {...info}
            {...{ mouseEnterHandler, mouseLeaveHandler }}
          ></RestaurantItemView>
        ))}
    </Styled.RestaurantList>
  );
}
