import React, { useContext } from "react";
import Styled from "./styles";
import { RestaurantDataContext } from "../../../contexts/RestaurantDataContext";

import RestaurantItemView from "../RestaurantItemView";

export default function RestaurantListView() {
  const { allRestaurant } = useContext(RestaurantDataContext);

  return (
    <Styled.RestaurantList>
      {allRestaurant &&
        allRestaurant.map(({ ...info }) => (
          <RestaurantItemView key={info._id} {...info}></RestaurantItemView>
        ))}
    </Styled.RestaurantList>
  );
}
