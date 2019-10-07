import React, { useState, useCallback, useContext } from "react";
import Styled from "./styles";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
// import RestaurantInfoView from "../RestaurantInfoView";

export default function RestaurantItemsView() {
  const [hoverFlag, setHoverFlag] = useState(false);
  // const { id, thumnailImageURL, ...restInfo } = info;
  // const linkPath = `/${id}`;

  const { filteredRestaurants, setHoveredRestaurant } = useContext(RestaurantContext);

  const mouseEnterHandler = useCallback(info => {
    setHoveredRestaurant(info);
    setHoverFlag(true);
  }, []);

  const mouseLeaveHandler = useCallback(_ => {
    setHoveredRestaurant(null);
    setHoverFlag(false);
  }, []);

  return (
    filteredRestaurants && filteredRestaurants.map((item, idx) => <Styled.RestaurantItem
      onMouseEnter={() => mouseEnterHandler(item)}
      onMouseLeave={() => mouseLeaveHandler()}
      key={item.id}
      {...{ hoverFlag }}
    >
      <Link to={`/${item.id}`}>
        <ThumbnailView
          width="5rem"
          imageUrl={item.thumnailImageURL}
          padding="0.5rem"
          circle={true}
        />
        {/* <RestaurantInfoView {...restInfo} /> */}
      </Link>
    </Styled.RestaurantItem>)
  );
}
