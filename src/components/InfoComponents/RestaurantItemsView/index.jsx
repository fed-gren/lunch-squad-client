import React, { useState, useCallback, useContext } from "react";
import Styled from "./styles";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import RestaurantInfoView from "../RestaurantInfoView";

export default function RestaurantItemsView() {
  const [hoverId, setHoverId] = useState(null);
  const { filteredRestaurants, setHoveredRestaurant } = useContext(RestaurantContext);

  const mouseEnterHandler = useCallback(info => {
    setHoveredRestaurant(info);
    setHoverId(info.id);
  }, []);

  const mouseLeaveHandler = useCallback(_ => {
    setHoveredRestaurant(null);
    setHoverId(null);
  }, []);

  return (
    filteredRestaurants && filteredRestaurants.map(info => (
      <Styled.RestaurantItem
        onMouseEnter={() => mouseEnterHandler(info)}
        onMouseLeave={() => mouseLeaveHandler()}
        key={info.id}
      >
        <Link to={`/${info.id}`}>
          <ThumbnailView
            width="5rem"
            imageUrl={info.thumnailImageURL}
            padding="0.5rem"
            circle={true}
          />
          <RestaurantInfoView
            {...info}
            {...{ hoverFlag: info.id === hoverId }}
          />
        </Link>
      </Styled.RestaurantItem>
    ))
  );
}
