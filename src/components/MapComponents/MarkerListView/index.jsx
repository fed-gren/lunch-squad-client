import React, { useContext } from "react";
import { Marker } from "react-kakao-maps";
import { RestaurantDataContext } from "../../../contexts/RestaurantDataContext";
export default () => {
  const { allRestaurant } = useContext(RestaurantDataContext);

  return (
    allRestaurant &&
    allRestaurant.map(({ _id, positionX, positionY }) => (
      <Marker key={_id} lat={positionX} lng={positionY}></Marker>
    ))
  );
};
