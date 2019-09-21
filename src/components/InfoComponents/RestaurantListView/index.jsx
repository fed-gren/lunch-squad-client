import React, { useContext } from "react";
import Styled from "./styles";
import { RestaurantDataContext } from "../../../contexts/RestaurantDataContext";

import RestaurantItemView from "../RestaurantItemView";

export default function RestaurantListView() {
  const { allRestaurant } = useContext(RestaurantDataContext);
  console.log(allRestaurant);
  return (
    <Styled.RestaurantList>
      {allRestaurant &&
        allRestaurant.map(({ _id, ...info }) => {
          return <RestaurantItemView key={_id} {...info}></RestaurantItemView>;
        })}
    </Styled.RestaurantList>
  );
}
