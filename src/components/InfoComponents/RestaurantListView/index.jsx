import React, { useContext } from "react";
import Styled from "./styles";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantItemView from "../RestaurantItemView";

export default function RestaurantListView() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <Styled.RestaurantList>
      {restaurants &&
        Object.values(restaurants).map(({ ...info }) => (
          <RestaurantItemView key={info.id} {...info}></RestaurantItemView>
        ))}
    </Styled.RestaurantList>
  );
}
