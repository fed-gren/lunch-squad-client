import React, { useContext } from "react";
import { Marker } from "react-kakao-maps";
import { RestaurantContext } from "../../../contexts/RestaurantContext";
export default () => {
  const { restaurants } = useContext(RestaurantContext);

  return (
    restaurants &&
    Object.values(restaurants).map(({ id, lat, lng }) => (
      <Marker key={id} {...{ lat, lng }}></Marker>
    ))
  );
};
