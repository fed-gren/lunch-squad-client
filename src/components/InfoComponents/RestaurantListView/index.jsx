import React, { useContext, useCallback } from "react";
import Styled from "./styles";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantItemView from "../RestaurantItemView";

export default function RestaurantListView() {
  const { filteredRestaurants } = useContext(RestaurantContext);

  return (
    <Styled.RestaurantList>
      {filteredRestaurants ? (
        filteredRestaurants.map(({ ...info }) => (
          <RestaurantItemView key={info.id} {...info} />
        ))
      ) : (
        <div />
      )}
    </Styled.RestaurantList>
  );
  // return filteredRestaurants ? (
  //   <Styled.RestaurantList>
  //     {filteredRestaurants.map(({ ...info }) => (
  //       <RestaurantItemView key={info.id} {...info} />
  //     ))}
  //   </Styled.RestaurantList>
  // ) : (
  //   <div />
  // );
}
